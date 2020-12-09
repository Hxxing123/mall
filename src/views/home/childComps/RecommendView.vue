<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name:"RecommendView",
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  },
}
</script>

<style>
  .recommend{
    display: flex;
    justify-content:space-around;
    width: 100%;
    padding: 15px 0 30px;
    border-bottom:10px solid #eee;
  }
  .recommend-item{
    text-align: center;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>