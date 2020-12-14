<template>
  <div class="cart">
    <nav-bar>
      <template v-slot:center>
        <div class="cart-nav">购物车({{$store.state.cartList.length}})</div>
      </template>
    </nav-bar>

    <scroll class="content" >  
    <cart-list></cart-list>
    </scroll>

  <cart-button :cart-list="cartList"></cart-button>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import CartList from '@/views/cart/childComps/CartList.vue'
import CartButton from '@/views/cart/childComps/CartButton.vue'

import Scroll from '@/components/common/scroll/Scroll';
export default {
  name:'Cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartButton
  },
  computed: {
    cartList() {
      return this.$store.state.cartList
    }
}
}
</script>

<style scoped>
  .cart-nav{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .cart{
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  cart-list{
    height: 100%;
  }
</style>