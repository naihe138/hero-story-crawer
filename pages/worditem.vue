<template>
	<div class="wordItem">
		<div class="wordbox">
			<img v-for="(item, index) in word" 
					 :key="index" 
					 width="400px"
					 height="278px"
					 style="margin: 20px;"
			     :src="item.img" :alt="item.title"
					 @click="toDetail(index)">
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			word: []
		}
	},
	methods: {
		toDetail(index) {
			this.$router.push('/worddetail?index='+ index)
		}
	},
	beforeCreate() {
		this.$store.dispatch('getWord').then(data => {
			this.word = data
		})
	}
}
</script>

<style scoped lang="less">
.wordItem{
	clear: both;
}
.wordbox {
	clear: both;
	overflow: hidden;
}
</style>
