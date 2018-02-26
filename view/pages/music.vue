<template>
	<div class="music">
		<img :src="music.zjtp_35" width="100%">
		<div class="musicItem" v-for="(items, index) in music.yllb_38" :key="index" @click="play(items.gq_db)">
			<span>{{items.gqmc_45}} &nbsp;| &nbsp;{{items.gsmc_9e}} &nbsp;| &nbsp; {{items.gqsc_14}} </span>
			<span class="icon"></span>
		</div>
		<audio ref="myMusic" :src="voiceUrl" preload style="display: none"></audio>
	</div>
</template>

<script>
export default {
	head () {
    return {
      title: `音乐鉴赏`
    }
  },
	data() {
		return {
			music: {},
			voiceUrl: 'https://game.gtimg.cn/images/yxzj/wtc_static_yxzj/audios/1.Main_theme_496183.mp3'
		}
	},
	methods: {
		play(url) {
			if (!/^http/.test(url)) {
				url = 'https:' + url
			}
			this.voiceUrl = url
			let myVoice = this.$refs.myMusic
			setTimeout(()=> {
				myVoice.play()
			}, 10)
		}
	},
	beforeCreate() {
		this.$store.dispatch('getMusic').then(data => {
			this.music = data
		})
	}
}
</script>

<style lang="less" scoped>
.music{
	width: 600px;
	background: #0698e0;
	margin: 20px auto;
	color: #fff;
}
.musicItem{
	height: 50px;
	display: flex;
	padding: 0 20px;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px dashed #0af;
}
.icon{
	display: block;
	width: 22px;
	height: 22px;
	background: url(../static/img/icon-play.png);
	background-size: 100% 100%;
}
</style>
