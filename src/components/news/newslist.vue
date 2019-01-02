<template>
  <div class="newlist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../assets/微信截图_20181228160601.png">
          <div class="mui-media-body">
            <h4>幸福</h4>
            <p class='mui-ellipsis'>
              <span>发表时间 2018-10-23 12:04:45</span>
              <span>点击 0 次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../assets/微信截图_20181228160601.png">
          <div class="mui-media-body">
            <h4>幸福</h4>
            <p class='mui-ellipsis'>
              <span>发表时间 2018-10-23 12:04:45</span>
              <span>点击 0 次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../assets/微信截图_20181228160601.png">
          <div class="mui-media-body">
            <h4>幸福</h4>
            <p class='mui-ellipsis'>
              <span>发表时间 2018-10-23 12:04:45</span>
              <span>点击 0 次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "newslist"
  }
</script>

<style lang="scss" scoped>
  .newlist {
    .mui-ellipsis {
      color: #22a6ff;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
