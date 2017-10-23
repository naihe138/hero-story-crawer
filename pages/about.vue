<template>
  <section class="container">
    <h4 class="title">关于本站</h4>
    <div class="text">
      <p>ps：本站数据是爬取“王者荣耀”官方的英雄故事网站数据来提供，仅仅是用来学习前端技术</p>
      <p>用到了vue2.0，nuxt， vuex，nodejs，koa，less，pm2，nginx，ssl 等技术来实现</p>
      <p>小程序页面移步到下面的二维码</p>
      <p></p>
    </div>
  </section>
</template>
<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `关于本站`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
.text{
  color: #0698e0;
}
</style>
