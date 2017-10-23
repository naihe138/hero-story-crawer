<template>
	<div>
		<div class="nav">
      <span v-for="(item, index) in nav.dhty_e9" :key="index" 
						@click="getHeroDetail(item.yxid_a7, index)" :class="index === showInde ? 'active' : ''">{{item.YXMC_8f}}</span>
    </div>
		<div style="margin: 30px 0;">
			<ul class="voice-list" v-if="detail.yxpfyy_fe">
				<li class="item" v-for="(items, i) in detail.yxpfyy_fe" :key="i">
					<div class="fm">
						<img :src="items.pfbanner_ed" alt="">
						<div class="conten">
							<p class="name">
								<span class="role">{{detail.YXMC_8f}}</span>&nbsp;|&nbsp;<em>{{items.pfmc_ff}}</em>
							</p>
							<p class="cv"> CV：{{items.yxcv_ff}}</p>
						</div>
					</div>
					<ul class="voiceList">  
						<li @click="play(subItem.yyyp1_1f)" v-for="(subItem, j) in items.yylb1_c8" :key="j">
							<p class="text">
								<span>{{subItem.yywa1_f2}}</span>
							</p>
							<span class="icon"></span>
						</li>
					</ul>
				</li>
			</ul>
			<div class="nodata" v-else>呜呜~~~爬虫没有爬到数据</div>
		</div>
		<audio ref="myVoice" :src="voiceUrl" preload style="display: none"></audio>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
	data () {
		return {
			showInde: 0,
			voiceUrl: 'https://game.gtimg.cn/images/yxzj/wtc_static_yxzj/audios/donghuangtaiyi_hall_1_7809614.wav',
			detail: {}
		}
	},
	computed: mapState({
		nav: state => state.voiceNav
	}),
	methods: {
		fetchDetail(id) {
			this.$store.dispatch('getVoiceDetail', id).then(response => {
				this.fixDetail(response)
			})
		},
		fixDetail(data) {
			let type = Object.prototype.toString.call(data.yxpfyy_fe)
			if (/undefined/gi.test(type)) {
				this.detail = data || {}
				return;
			}
			if (/Object/.test(type)) {
				let arr = []
				arr.push(data.yxpfyy_fe)
				data.yxpfyy_fe = arr
			}
			let r = data
			r.yxpfyy_fe.map((item) => {
				if (!/^http/.test(item.pfbanner_ed)) {
					item.pfbanner_ed = 'https:' + item.pfbanner_ed
				}
				return item
			})
			this.detail = r
		},
		getHeroDetail(id, index) {
			this.showInde = index
			this.fetchDetail(id)
		},
		play(url) {
			if (!/^http/.test(url)) {
				url = 'https:' + url
			}
			this.voiceUrl = url
			let myVoice = this.$refs.myVoice
			setTimeout(()=> {
				myVoice.play()
			}, 10)
		}
	},
	beforeCreate () {
		const _this = this
		this.$store.dispatch('getVoiceNav').then(data => {
			let id = data.dhty_e9[0].yxid_a7
			this.fetchDetail(id)
		})
	}
}
</script>

<style scoped lang="less">
ul, li{
	list-style: none;
	padding: 0;
	margin: 0;
}
p{
	margin: 0;
}
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
.active{
	 background: #0698e0;
	 color: #ffffff;
}
.voice-list {
	position: relative;
	height: auto;
}
.item{
	width: 600px;
	margin: 0 auto;
	background: #0698e0;
	color: #fff;
	box-sizing: border-box;
	.fm{
		width: 600px;
		height: 330px;
		position: relative;
		img{
			width: 100%;
			height: 330px;
		}
		.conten{
			position: absolute;
			height: 100px;
			width: 100%;
			bottom: 0;
			left: 0;
			background: linear-gradient(to top, #000 0%, #000 30%, transparent);
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 20px;
			p{
				padding-top: 50px;
			}
		}
	}
	.voiceList{
		width: 100%;
		box-sizing: border-box;
		padding: 20px;
		li{
			display: flex;
			height: 40px;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px dashed #27aef0;
		}
		.icon{
			width: 22px;
			height: 22px;
			background: url('../static/img/icon-play.png');
			background-size: 100% 100%;
		}
	}
}
.nodata{
	padding: 20px 0;
	text-align: center;
	color: #27aef0;
}
</style>