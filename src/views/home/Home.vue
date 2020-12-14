<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <div id="empty"></div>
    <tab-control :titles="['流行','新款','精选']" 
    @tabClick="tabClick" 
    class="tab-control"
    v-show="isTab"></tab-control>

    <scroll class="content" 
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img class="image" :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <recommend-bg></recommend-bg>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl" v-show="!isTab"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

  </div>
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top> 
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {Swiper,SwiperItem} from '@/components/common/swiper/index';
import RecommendView from '@/views/home/childComps/RecommendView';
import RecommendBg from '@/views/home/childComps/recommend_bg';
import Recommend_bg from './childComps/recommend_bg.vue';
import TabControl from '@/components/content/TabControl/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';
import Scroll from '@/components/common/scroll/Scroll';
import BackTop from '@/components/content/backtop/BackTop';


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
    Scroll
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
      scroll: null,
      isShowBackTop: false,
      saveY:0,
      isLoad:false,
      isTab:false,
      offsetTop:0
    }
  },
  created () {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  unmounted () {
    //console.log(1);
  },
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY=this.$refs.scroll.scroll.y
  },
  methods: {
    /**事件监听 */
    tabClick(index){
      //console.log(index)
      const currentTypes=['pop','new','sell'];
      this.currentType=currentTypes[index];
      //console.log(this.currentType)
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.refresh()
      //console.log("---");
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 800
      this.isTab = (-position.y) > -this.offsetTop
    },
    imageLoad(){
      if(!this.isLoad){
        this.offsetTop=-this.$refs.tabControl.$el.offsetTop
        this.isLoad=true
      }
      
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
         this.$refs.scroll.finishPullUp()
       })
    }
    
  }
}
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 11;
  }

  #empty{
    height: 44px;
  }
</style>