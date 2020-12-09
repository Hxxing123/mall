<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <div id="empty"></div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img class="image" :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <recommend-bg></recommend-bg>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>

    <back-top ></back-top> 
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {Swiper,SwiperItem} from '@/components/common/swiper/index';
import RecommendView from '@/views/home/childComps/RecommendView';
import RecommendBg from '@/views/home/childComps/recommend_bg';
import Recommend_bg from './childComps/recommend_bg.vue';
import TabControl from '@/components/content/TabControl/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';
import BackTop from '@/components/content/backtop/BackTop';
import VScroll from '@/components/common/scroll/scroll';

import {getHomeMultidata,getHomeGoods} from '@/network/home.js';
export default {
  name:"Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    RecommendBg,
    TabControl,
    GoodsList,
    BackTop,
    VScroll
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      
    }
  },
  created () {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  unmounted () {
    console.log(1);
  },
  methods: {
    /**事件监听 */
    tabClick(index){
      //console.log(index)
      const currentTypes=['pop','new','sell'];
      this.currentType=currentTypes[index];
      //console.log(this.currentType)
    },
    
    /**网络请求 */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page + 1;
       getHomeGoods(type,page).then(res => {
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page +=1;
         //console.log(res);
       })
    }
    
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  #empty{
    height: 44px;
  }
</style>