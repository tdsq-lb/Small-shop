<template>
	<view>首页</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			async getSwipers(){
				const res = await this.$myRequest({
					url:"/api/getlunbo"
				})
				this.swipers = res.data.message
			}
		}
	}
</script>

<style>
	
</style>
