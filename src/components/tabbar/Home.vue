<template>
  <div class="home_container">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
        <svg class="mui-icon" aria-hidden="true">
          <use xlink:href="#mui-icon-zixun"></use>
        </svg>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picturelist">
        <svg class="mui-icon" aria-hidden="true">
          <use xlink:href="#mui-icon-fenxiang"></use>
        </svg>
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
        <svg class="mui-icon" aria-hidden="true">
          <use xlink:href="#mui-icon-goumai-copy"></use>
        </svg>
        <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <svg class="mui-icon" aria-hidden="true">
          <use xlink:href="#mui-icon-liuyan"></use>
        </svg>
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <svg class="mui-icon" aria-hidden="true">
          <use xlink:href="#mui-icon-icon_shipinx"></use>
        </svg>
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <svg class="mui-icon" aria-hidden="true">
          <use xlink:href="#mui-icon-lianxi"></use>
        </svg>
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="scss" scoped>
  .home_container {
    .mint-swipe {
      height: 200px;
      .mint-swipe-item {
        &:nth-child(1) {
          background-color: royalblue;
        }
        &:nth-child(2) {
          background-color: mediumpurple;
        }
        &:nth-child(3) {
          background-color: palegreen;
        }
      }
    }
    .mui-grid-view.mui-grid-9 {
      background-color: #fff;
      border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
      border: none;
    }
    .mui-icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
</style>
