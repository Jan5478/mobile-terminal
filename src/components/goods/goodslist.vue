<template>
  <div class="goodslist">
    <div class="goodslist-item" @click="goDetail">
      <img src="http://img12.360buyimg.com/n7/jfs/t21415/332/642302956/189613/778f2021/5b13cd6cN8e12d4aa.jpg" alt="">
      <h3 class="title">华为(HUAWEI)荣耀6(Plus)16G双4G版</h3>
      <div class="info">
        <p class="price">
          <span class="new">￥2099</span>
          <span class="old">￥1899</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goodslist-item">
      <img src="http://img12.360buyimg.com/n7/jfs/t21415/332/642302956/189613/778f2021/5b13cd6cN8e12d4aa.jpg" alt="">
      <h3 class="title">华为(HUAWEI)荣耀6(Plus)豪华版16G32G64G双4G版</h3>
      <div class="info">
        <p class="price">
          <span class="new">￥2099</span>
          <span class="old">￥1899</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goodslist-item">
      <img src="http://img12.360buyimg.com/n7/jfs/t21415/332/642302956/189613/778f2021/5b13cd6cN8e12d4aa.jpg" alt="">
      <h3 class="title">华为(HUAWEI)荣耀6(Plus)16G双4G版</h3>
      <div class="info">
        <p class="price">
          <span class="new">￥2099</span>
          <span class="old">￥1899</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>

<script>
  export default {
    name: "goodslist",
    methods: {
      goDetail(){
        this.$router.push('/home/goodsinfo')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    > .goodslist-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px #ccc;
      margin: 5px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 290px;
      > img {
        width: 100%;
      }
      > h3 {
        font-size: 16px;
      }
      > .info {
        background-color: #eee;
        padding: 5px;
        .new {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          font-size: 12px;
          text-decoration: line-through;
          margin-left: 10px;
        }
        .sell {
          margin-bottom: 0;
          margin-top: 8px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
