<template>
  <div class="layoutbox">
    <div class="side">
      <h3>王者荣耀故事站</h3>
      <ul>
        <li class="nav" @click="toNav('/')">英雄列表</li>
        <li class="nav" @click="toNav('/word')">世界</li>
        <li class="nav" @click="toNav('/skin')">皮肤鉴赏</li>
        <li class="nav" @click="toNav('/voice')">语音鉴赏</li>
        <li class="nav" @click="toNav('/music')">音乐鉴赏</li>
        <li class="nav" @click="toNav('/about')">关于</li>
      </ul>
    </div>
    <div class="main">
      <nuxt/>
      <my-footer/>
    </div>
  </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'

export default {
  components: {
    MyFooter
  },
  methods: {
    toNav(str) {
      this.$router.push(str)
    }
  }
}
</script>

<style lang="less">
.layoutbox{
  .side{
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    width: 300px;
    background: #0698e0;
    color: #ffffff;
    h3{
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #5ebaff
    }
    li{
      line-height: 32px;
      &:hover{
        background: rgba(255,255,255, 0.2)
      }
    }
  }
  .main{
    margin-left: 300px;
  }
}
.container{
  margin: 0;
  width: 100%;
  padding: 10px 0;
  text-align: center;
}

.button, .button:visited{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus{
  color: #fff;
  background-color: #3B8070;
}

.title{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
