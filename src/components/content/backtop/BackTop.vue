<template>
  <div class="back-top" @click="backTop" v-show="isShow">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:"BackTop",
  data(){
    return{
      isShow:false
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
      if(scrollTop < 500){
        this.isShow=false
      }else{
        this.isShow=true
      }
    });
  },
  methods: {
    backTop(){
      let distance = document.documentElement.scrollTop || document.body.scrollTop;//获得当前高度
      //console.log(distance) 
        let step = distance / 30; //每步的距离
        (function jump() {
            if (distance > 0) {
                distance -= step;
                scrollTo(0, distance);
                setTimeout(jump, 10);
            }
        })();
    }
  }
}
</script>

<style>
  .back-top{
    position: fixed;
    right: 4%;
    bottom: 50px;
    z-index: 10;
  }
  .back-top img{
    width: 50px;
  }
</style>