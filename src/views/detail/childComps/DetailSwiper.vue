<template>
  <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index';
import {getDetail} from '@/network/detail.js'

export default {
  name:"DetailSwiper",
  data () {
    return {
      iid:null,
      topImages:null
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  created () {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
  },
  methods: {
    getDetail(iid){
      getDetail(iid).then(res=>{
        this.topImages=res.result.itemInfo.topImages
        //console.log(this.topImages);
      })
    }
  }
}
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
  }
</style>