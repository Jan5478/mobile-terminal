<template>
  <div class="numberbox">
    <div class="mui-numbox">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="number"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.js';
  export default {
    name: "number",
    mounted(){
      mui(".mui-numbox").numbox();  // mui的js插件，需要初始化
    },
    methods: {
      countChanged(){
        // console.log(this.$refs.number.value) 文本框的值
        this.$emit('getCount', this.$refs.number.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
