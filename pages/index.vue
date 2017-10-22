<template>
  <section class="container">
    <h2>英雄列表</h2>
    <div class="nav">
      <span v-for="(item, index) in hero.nav" :key="index" @click="toFilter(item.type)">{{item.text}}</span>
    </div>
    <div class="imagebox">
      <img v-for="(item, index) in hero.heroList" :key="index" 
           :src="item.heroimg" 
           :alt="item.title" 
           @click="toDetail(index)">
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return{
      hero: {},
      allHero: []
    }
  },
  methods: {
    toDetail(index) {
      this.$router.push(`/herodetail?index=${index}`)
    },
    toFilter(type) {
      if (type === 'all') {
        this.hero.heroList = this.allHero;
      } else {
        this.hero.heroList = this.allHero.filter(item => item.camptype == type)
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('getHero').then(data=>{
      this.hero = data;
      this.allHero = data.heroList
    })
  }
}
</script>

<style scoped lang="less">
.title{
  margin: 50px 0;
}
.nav{
  padding: 10px 0;
  span{
    display: inline-block;
    padding: 0 12px;
    border: 1px solid #0698e0;
    border-radius: 30px;
    margin: 10px;
  }
}
img{
  cursor: pointer;
}
</style>
