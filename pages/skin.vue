<template>
	<div>
		<img v-for="(item, index) in skin" :key="index" :src="item.img" @click="toSkin(item.url)">
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	computed: mapState({
		skin: state => state.skin
	}),
	methods: {
		toSkin(url) {
			location.href = url
		}
	},
	beforeMount() {
		this.$store.dispatch('getSkin')
	}
}
</script>

