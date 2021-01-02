<template>
  <div class="detail">
    <nav-bar>
      <template v-slot:left>
        <div @click="goBack">
          <img src="@/assets/img/common/back.svg" class="back">
        </div>
      </template>
      <template v-slot:center>
        <div class="detail-nav">
          <div v-for="(item,index) in titles" 
               :class="{active:index === currentIndex}"
               @click="itemClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>

    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
    <detail-swiper ref="swiper"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop :shop="shop"></detail-shop>
    <detail-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-info>
    <detail-param :param-info="paramInfo" ref="param"></detail-param>
    <detail-comment :comment-info="commentInfo" ref="comment"></detail-comment>
    <goods-list :goods="recommends" ref="recommend"></goods-list>
  
    </scroll>
    <toast ref="toast"></toast>
    <detail-button @addCart='addCart'></detail-button>
  </div>
</template>

<script>
import DetailSwiper from '@/views/detail/childComps/DetailSwiper.vue'
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from '@/network/detail.js'
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo.vue'
import DetailShop from '@/views/detail/childComps/DetailShop.vue'
import DetailInfo from '@/views/detail/childComps/DetailInfo.vue'
import DetailParam from '@/views/detail/childComps/DetailParam.vue'
import DetailComment from '@/views/detail/childComps/DetailComment.vue'
import GoodsList from '@/components/content/goods/GoodsList';
import DetailButton from '@/views/detail/childComps/DetailButton.vue'
import Toast from '@/components/common/toast/Toast.vue'
import Scroll from '@/components/common/scroll/Scroll';
export default {
  name:"Detail",
  data () {
    return {
      iid:null,
      titles:["商品","参数","评论","推荐"],
      currentIndex:0,
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopsY:[]
    }
  },
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    Scroll,
    DetailInfo,
    DetailParam,
    DetailComment,
    GoodsList,
    DetailButton,
    Toast
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
      this.themeTopsY = []
      this.themeTopsY.push(0)
      this.themeTopsY.push(this.$refs.param.$el.offsetTop)
      this.themeTopsY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopsY.push(this.$refs.recommend.$el.offsetTop)
      //console.log(this.themeTopsY);
      
    },
    contentScroll(position){
      const positionY= -position.y
      let length =this.themeTopsY.length
      for(let i= 0;i<length;i++){
        if(this.currentIndex !==i&& ((i< length -1&&positionY>this.themeTopsY[i]&&positionY<this.themeTopsY[i+1])||(i===length -1&&positionY>this.themeTopsY[i]))){
          this.currentIndex = i;
          //console.log(this.currentIndex);
        }
      }
    },
    itemClick(index){
      this.currentIndex=index;
      //console.log(index)
      this.$refs.scroll.scrollTo(0,-this.themeTopsY[index],100)
    },
    goBack(){
      this.$router.back()
    },
    getDetail(iid){
      getDetail(iid).then(res=>{
        const data = res.result; 
        //获取商品基本信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        //console.log(data.itemInfo, data.columns, data.shopInfo.services);
        //获取店铺信息
        this.shop = new Shop(data.shopInfo);
        //获取商品详情信息
        this.detailInfo = data.detailInfo; 
        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        //获取评论信息
        if(data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
        this.$nextTick(()=>{
          //
        })
      })
    },
    getRecommend(){
      getRecommend().then(res=>{
        this.recommends=res.data.list
      })
    },
    addCart() {
    // 1.创建对象moxing
      const product = {}
      // 2.对象信息
      product.iid = this.iid;
      product.imgURL = this.$refs.swiper.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc;
      product.newPrice = this.goods.nowPrice;
      // 3.添加到Store中
      this.$store.dispatch('addCart', product)//.then(res => {
      //调用自己封装的toast组件
      this.$refs.toast.show('添加成功，在购物车等亲~',800)
      //})  
    }
  },
  
  created () {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
    //console.log(this.goods);
    this.getRecommend()
    
  },
  mounted () {
    
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 101;
  background-color: #fff;
  height: 100vh;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 0px;
  left: 0;
  right: 0;
}
.detail-nav{
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  position: relative;
  z-index: 10;
}
.active{
  color: #ff5777;
}
.back{
  margin-top:11px;
}
</style>