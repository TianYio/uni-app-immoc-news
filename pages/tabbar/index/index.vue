<template>
	<view class="content">
		<navbar></navbar>
		<view class="ul-li" v-for="item in 50" :key="item">
			{{item}}内容
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
