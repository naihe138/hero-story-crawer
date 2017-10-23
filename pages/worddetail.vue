<template>
	<div class="wordDetail">
		<div class="navBox">
			<span class="nav" 
						:class="index === showIndex ? 'active' : ''" 
						v-for="(item, index) in wordNav" 
						:key="index" @click="selectNav(item, index)">{{item.title}}</span>
		</div>
		<div class="textbox">
			<h3>{{detail.title}}</h3>
			<p>{{detail.time}}</p>
			<div>
				<p v-for="(item,index) in detail.textContent" :key="index">{{item}}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	head () {
    return {
      title: `世界详情`
    }
  },
	data() {
		return {
			wordNav: [],
			showIndex: 0,
			detail: {}
		}
	},
	computed: {
		wordItem() {
			return this.$store.state.wordItem
		}
	},
	methods: {
		fetchContent(id, url) {
			this.$store.dispatch('getWordDetail', {id, url}).then(data => {
				this.detail = data
			})
		},
		selectNav(item, index) {
			this.showIndex = index
			this.fetchContent(item.InfoId, item.infourl)
		}
	},
	beforeMount() {
		let index = this.$route.query.index
		let item = this.wordItem[index]
		if(!item){
			this.$router.push('/worditem')
			return
		}
		this.$store.dispatch('getWordNav', item.id).then(data => {
			this.wordNav = data
			let first = data[0]
			this.fetchContent(first.InfoId, first.infourl)
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
.navBox{
	display: flex;
	margin: 20px auto;
	justify-content: center;
	.nav{
		border: 1px solid #0698e0;
		border-left: 0;
		padding: 15px 25px;
		color: #0698e0;
		cursor: pointer;
	}
	.nav:first-child{
		border-left: 1px solid #0698e0;
	}
	.active{
		background: #0698e0;
		color: #fff;
	}
}
.textbox{
	padding: 20px;
	text-indent: 30px;
	text-align: center;
}
</style>
