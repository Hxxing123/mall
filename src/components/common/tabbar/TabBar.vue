<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar",
  components: {
    
  }
}

</script>

<style scoped>
#tar-bar{
  display: flex;
  background-color: #f6f6f6;
  justify-content:space-around ;
  position: fixed;
  left: 0;
  right:0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.2) ;
  z-index: 100;
}
</style>