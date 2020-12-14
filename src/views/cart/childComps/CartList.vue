<template>
  <div class="cart-list">
    <cart-list-item v-for="item in $store.state.cartList" :item-info="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from '@/views/cart/childComps/CartListItem.vue'
export default {
  name:"CartList",
  components: {
    CartListItem
  }
}
</script>

<style scoped>
 
</style>