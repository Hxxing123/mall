<template>
<div class="goods">
  <goods-list-item :goodsItem="item" v-for="item in goods"></goods-list-item>
</div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem.vue';
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 3px;
  }
</style>