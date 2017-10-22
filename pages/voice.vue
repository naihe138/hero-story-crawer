<template>
	<div>
		<div class="nav">
      <span v-for="(item, index) in nav.dhty_e9" :key="index" 
						@click="toFilter(item.yxid_a7)" :class="index === showInde ? 'active' : ''">{{item.YXMC_8f}}</span>
    </div>
		<div>
			<ul class="voice-list">
				<li class="item">
					<img src="//game.gtimg.cn/images/yxzj/wtc_static_yxzj/images/dhty_7707731.jpg" alt="">
					<div class="conten">
						<p class="name">
							<span class="role">东皇太一</span><em>噬灭日蚀</em>
						</p>
						<p class="cv"> CV：沈磊 </p>
					</div>
					<ul class="conten">  
						<li data-status="init">
							<p class="text">
								<span>东皇太一-噬灭日蚀语音1</span>
							</p>
							<span class="icon init"></span>
						</li>
					</ul>
				</li> 
			</ul>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
	data () {
		return {
			showInde: 0
		}
	},
	computed: mapState({
		nav: state => state.voiceNav
	}),
	beforeCreate () {
		this.$store.dispatch('getVoiceNav')
	}
}
</script>

<style scoped lang="less">
ul, li{
	list-style: none;
	padding: 0;
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
	margin: 20px auto;
	background: #0698e0;
	color: #fff;
	img{
		width: 100%;
	}
}
.conten{
	padding: 20px;
}
</style>