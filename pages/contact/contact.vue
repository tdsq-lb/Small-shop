<template>
	<view class="contact">
		<view class="img">图片</view>
		<view class="info">
			<view @click="phone">联系电话：15387535016 (点击拨打)</view>
			<view>地址：浙江省杭州市余杭区IT公园</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120.013931,
				latitude: 30.28183,
				scale: 15,
				covers: [{
					latitude: 30.28183,
					longitude: 120.013931,
					iconPath: '../../static/logo.png',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber:'15387535016'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
			background-color: #007AFF;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
