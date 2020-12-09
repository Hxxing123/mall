<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" class="tabcontrol-item" @click="itemClick(index)" :class="{active:index===current}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      current:0
    }
  },
  methods: {
    itemClick(index){
      this.current=index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tabcontrol{
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
.tabcontrol-item{
  flex: 1;
  text-align: center;
}
.tabcontrol-item span{
  padding: 5px 5px 3px;
}
.active{
  color:#ff5777;
  
}
.active span{
  border-bottom: 3px solid #ff5777;
}
</style>