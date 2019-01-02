<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="2000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="market">市场价 <span class="normal">￥2399</span></span>
            <span class="sell">销售价 <span class="red">￥2198</span></span>
          </p>
          <p class="buyCount">购买数量：<numberbox @getCount="getselectedCount"></numberbox></p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="detail">
            <span>商品货号：SD2935468008</span>
            <span>库存情况：60件</span>
            <span>上架时间：2018-11-12</span>
            <mt-button type="primary" size="large" plain class="button">图文详情</mt-button>
            <mt-button type="danger" size="large" plain class="button">商品评价</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import numberbox from '../common/numberbox.vue'; // 数字选择框组件
  export default {
    name: "goodsinfo",
    data(){
      return{
        ballFlag: false,
        selectedCount: 1, // 定义默认选中的数量值
      }
    },
    methods:{
      add(){
        this.ballFlag = !this.ballFlag;
      },
      beforeEnter(el){
        el.style.transform = 'translate(0,0)'
      },
      enter(el,done){
        el.offsetWidth;
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badgePosition = document.getElementById("badge").getBoundingClientRect();
        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;
        el.style.transform = `translate(${ xDist }px, ${ yDist }px)`;
        el.style.transition = 'all 0.5s cubic-bezier(0.4, -0.3, 1, 0.68)';
        done();
      },
      afterEnter(el){
        this.ballFlag = !this.ballFlag
      },
      getselectedCount(count){
        this.selectedCount = count;
      }
    },
    components: {
      numberbox
    }
  }
</script>

<style lang="scss" scoped>
  .goodsinfo{
    background-color: #eee;
    overflow: hidden;
    .ball{
      background-color: red;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      position: absolute;
      top: 390px;
      left: 150px;
      z-index: 99;
    }
    .mint-swipe{
      height: 200px;
      .mint-swipe-item{
        &:nth-child(1){
          background: url("https://img14.360buyimg.com/n2/jfs/t19225/206/1269058000/160653/b8379287/5ac1e879N3153c619.jpg!q95.jpg") no-repeat center top;
        }
        &:nth-child(2){
          background: url("https://img12.360buyimg.com/n2/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q95.jpg") no-repeat center top;
        }
        &:nth-child(3){
          background: url("https://img14.360buyimg.com/n2/jfs/t19225/206/1269058000/160653/b8379287/5ac1e879N3153c619.jpg!q95.jpg") no-repeat center top;
        }
      }
    }
    .buyCount {
      display: flex;
    }
    .price{
      color: #2f2f2f;
      > .market{
        margin-right: 10px;
        > .normal{
          text-decoration: line-through;
        }
      }
      > .sell{
        > .red{
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .detail{
      color:#9e9e9e;
      > span{
        display: block;
        line-height: 30px;
      }
      > .button{
        margin-top: 15px;
      }
    }
  }
</style>
