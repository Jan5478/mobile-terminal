<template>
    <div class="comment">
      <h4>发表评论</h4>
      <hr/>
      <textarea placeholder="请输入要BB的内容（最多120个字）" maxlength="120"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="item">
        <div class="title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2028-12-12
        </div>
        <div class="content">
          谢谢你这么包容我，这么爱我！
        </div>
      </div>
      <div class="item">
        <div class="title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2028-12-12
        </div>
        <div class="content">
          谢谢你这么包容我，这么爱我！
        </div>
      </div>
      <div class="item">
        <div class="title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2028-12-12
        </div>
        <div class="content">
          谢谢你这么包容我，这么爱我！
        </div>
      </div>
      <div class="item">
        <div class="title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2028-12-12
        </div>
        <div class="content">
          谢谢你这么包容我，这么爱我！
        </div>
      </div>
      <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "comment"
    }
</script>

<style lang="scss" scoped>
  .comment {
    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0;
    }
    .item {
      font-size: 13px;
      .title {
        background-color: #ccc;
        line-height: 28px;
        margin: 8px 0;
      }
      .content {
        text-indent: 2em;
        line-height: 30px;
      }
    }
  }
</style>
