<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="news" />
	</view>
</template>

<script>
	import newsList from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				news: []
			}
		},
		onLoad() {
			this.getnewsList()
		},
		components: {
			"news-item": newsList
		},
		methods: {
			async getnewsList() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.news = res.data.message
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		},
	}
</script>

<style lang="scss">
</style>
