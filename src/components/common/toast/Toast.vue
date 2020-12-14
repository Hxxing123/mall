<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            isShow: false    
        }
    },
    methods: {
        show(message, time) {
            this.isShow = true
            this.message = message
            setTimeout(() => {
                this.isShow = false
                this.message = ''
            },time)
        }
    }
}
</script>

<style>
    .toast {
        position: fixed;
        line-height: 50px;
        top: 50%;
        left: 50%;
        height: 50px;
        width: 240px;
        transform: translate(-50%,-50%);
        padding-left:30px;
        z-index: 999;
        color: #fff;
        background-color: rgba(0,0,0,.7);
        border-radius: 10px;
    }
</style>