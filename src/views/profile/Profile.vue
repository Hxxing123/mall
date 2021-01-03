<template>
  <div id="profile" @click="itemclick">
    <nav-bar class="profileTop">
      <template v-slot:center>
        <div>个人中心</div>
      </template>
    </nav-bar>

  <scroll id="profile-scroll">
    <user></user>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view></list-view>
    <div class="div1"></div>
  </scroll>
  <toast ref="toast"></toast>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import User from './childComps/User.vue'
import ListView from './childComps/ListView.vue'
import Toast from '@/components/common/toast/Toast.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
export default {
  components: {
    NavBar,
    User,
    ListView,
    Toast,
    Scroll
  },
  methods: {
    itemclick(){
      this.$refs.toast.show('正在开发中，敬请期待~',800)
    }
  }
}
</script>

<style scoped>
  .profileTop {
    background-color: var(--color-tint);
    color: #fff;
    box-shadow: 0 2px 1px rgba(100, 100, 100, .05);
  }
  .account {
    display: flex;
    padding: 8px 0 4px 0;
  }
  .account :last-child{
    border-right: solid 1px #fff;
  }
  .account-item{
    width: 100%;
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    padding: 20px;
    border-right: solid 1px #f2f2f2;
    color: #666;
  }
  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }
  .account-info {
    margin-top: 6px;
  }
  .div1{
    height: 500px;
  }
  .profile-scroll{
    background-color: #f6f6f6;
    height:  calc(100% - 44px - 49px);
    width: 100%;
  }
</style>