<template>
	<div class="detailbox">
		<h2 class="title">{{title}}</h2>
		<h4 class="history" v-if="heroDetail.historyTitle" @click="toShow">查看历史上的他</h4>
		<div class="textbox">
			<div v-for="(item, index) in heroDetail.heroDetail" :key="index">
				<p v-if="(item.type === 'text')">{{item.text}}</p>
				<img v-if="(item.type === 'img')" :src="item.text">
			</div>
		</div>
		<transition name="fade">
			<div class="pupop" v-show="show">
				<div class="pupopConten">
					<h4>{{heroDetail.historyTitle}} <span @click="toShow">X</span></h4>
					<div style="padding: 0 20px;">{{heroDetail.historyContent}}</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	head () {
    return {
      title: `英雄详情`
    }
  },
	data() {
		return {
			heroDetail: {},
			title: '',
			show: false
		}
	},
	methods: {
		toShow() {
			this.show = !this.show
		}
	},
  beforeMount () {
		let _this = this
		let index = this.$route.query.index
		if (this.$store.state.hero.heroList) {
			let item = this.$store.state.hero.heroList[index]
			console.log(item.title)
			_this.title = item.title
			this.$store.dispatch('getHeroDetai', {id: item.heroid, url: item.infourl}).then(data => {
				_this.heroDetail = data
			})
		} else {
			this.$router.push('/')
		}
  }
}
</script>

<style scoped lang="less">
.detailbox{
	text-align: center;
	padding: 0 30px;
}
.history{
	color: #0698e0;
	text-decoration: underline
}
.title{
	margin-top: 60px;
}
.pupop{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	.pupopConten{
		width: 580px;
		background: #ffffff;
		padding-bottom: 20px;
		h4{
			border-bottom: 1px solid #f0f0f0;
			padding-bottom: 20px;
			position: relative;
			span{
				position: absolute;
				border: 1px solid #0698e0;
				width: 30px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				border-radius: 30px;
				color: #0698e0;
				right: -15px;
				top: -30px;
				background: #ffffff;
			}
		}
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>

