<template>
	<view class="navbar">
		<view class="navbar-content">
			<view class="statusBar" :style="{height:statusBarHeight+'px'}"></view>
			<view class="search-wrap" :style="{'padding-top':(searchMarginTop?searchMarginTop:6)+'px',width:searchWidth+'px'}">
				<view class="serach">
					<view class="serach_icon"></view>
					<view class="serach_text">uni-app__text</view>
				</view>
			</view>
		</view>
		<view :style="{height:(45 + statusBarHeight)+'px'}">占位</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				searchWidth: 375,
				searchMarginTop: 0,
			};
		},
		created() {
			// 获取状态栏高度
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight;
			// 除 H5 App 支付宝小程序外,其他平台获取 胶囊信息
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButton = uni.getMenuButtonBoundingClientRect()
			const searchWidth = menuButton.left;
			this.searchWidth = searchWidth;
			this.searchMarginTop = menuButton.top - this.statusBarHeight;
			console.log(menuButton);
			// #endif
		}
	}
</script>

<style lang='scss'>
	.navbar {
		.navbar-content {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			opacity: 1;
			background-color: $mk-base-color;

			.search-wrap {
				height: 45px;
				padding-left: 10px;
				padding-right: 10px;
				box-sizing: border-box;

				.serach {
					display: flex;
					height: 32px;
					align-items: center;
					background-color: #fff;
					box-sizing: border-box;
					border-radius: 15px;
					padding-left: 10px;

					.serach_icon {
						width: 10px;
						height: 10px;
						border: 1px solid red;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
