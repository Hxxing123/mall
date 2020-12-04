<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="#FF5777">
        <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg" alt="" >
        </template>
        <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/home_active.svg" alt="" >
        </template>
        <template v-slot:item-text>        
        <div class="tab-bar-item">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#FF5777">
        <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.svg" alt="" >
        </template>
        <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/category_active.svg" alt="" >
        </template>
        <template v-slot:item-text>        
        <div class="tab-bar-item">分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#FF5777">
        <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" >
        </template>
        <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" >
        </template>
        <template v-slot:item-text>        
        <div class="tab-bar-item">购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#FF5777">
        <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.svg" alt="" >
        </template>
        <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" >
        </template>
        <template v-slot:item-text>        
        <div class="tab-bar-item">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name:"MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>