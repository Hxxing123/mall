<template>
<div>
  <login-top></login-top>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue"

export default {
  name:"Login",
  components: {
    NavBar,
  },
  methods: {
    goBack(){
      this.$router.back();
    }
  }
}
</script>

<style>
  .back{
    margin-top: 11px;
  }

</style>