<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods" />
		<view class="isOver" v-if="flag">----我是有底线的----</view>
	</view>
</template>

<script>
	import goodList from '../../components/goods-list/goods-list.vue';
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		components: {
			"goods-list": goodList
		},
		methods: {
			async getGoodsList(CallBack) {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex=" + this.pageindex
				})
				this.goods = [...this.goods, ...res.data.message]
				CallBack && CallBack()
			},
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		onReachBottom() {
			if (this.goods.length < this.pageindex * 10) return this.flag = true
			this.pageindex++;
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh();
				})
			}, 100)
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}

	.isOver {
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 28rpx;
		color: #ccc;
	}
</style>
