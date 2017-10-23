<template>
	<div class="word">
		<div class="wordbox">
			<div @click="toDetail(true)"></div>
			<div @click="toDetail(false)"></div>
			<div @click="toDetail(false)"></div>
			<div @click="toDetail(false)"></div>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		toDetail(isb) {
			if (isb) {
				this.$router.push('/worditem')
			} else {
				alert('敬请期待')
			}
		}
	}
}
</script>

<style scoped>
.word{
	clear: both;
	
}
.wordbox {
	clear: both;
	overflow: hidden;
}
.wordbox div{
	width: 530px;
	height: 280px;
	background-size: 100% 100%;
	float: left;
	margin: 10px;
}
.wordbox div:nth-of-type(1) {
	background-image: url(//game.gtimg.cn/images/yxzj/act/a20161209story/world-origin.jpg)
}
.wordbox div:nth-of-type(2) {
	background-image: url(//game.gtimg.cn/images/yxzj/act/a20161209story/world-map.jpg)
}
.wordbox div:nth-of-type(3) {
	background-image: url(//game.gtimg.cn/images/yxzj/act/a20161209story/world-technology.jpg)
}
.wordbox div:nth-of-type(4) {
	background-image: url(//game.gtimg.cn/images/yxzj/act/a20161209story/world-power.jpg)
}
</style>

