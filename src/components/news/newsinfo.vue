<template>
  <div class="newsinfo">
    <h4 class="title">新闻标题</h4>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击：0次</span>
    </p>
    <hr/>
    <div class="content">
      Be yourself; everyone else is already taken.
      Be yourself; everyone else is already taken.
      Be yourself; everyone else is already taken.
      Be yourself; everyone else is already taken.
    </div>
    <comment></comment>
  </div>
</template>

<script>
  import comment from '../common/comment.vue';
  export default {
    name: "newsinfo",
    components: {
      'comment': comment
    }
  }
</script>

<style lang="scss" scoped>
  .newsinfo {
    padding: 0 4px;
    .title {
      color: red;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      color: #226aff;
    }
  }
</style>
