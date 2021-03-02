<template>
	<view>
		<view class="list-card">
			<view class="card-image">
				<image src="../../static/logo.png" mode="aspectFill" />
			</view>
			<view class="card-content">
				<view class="card-content__title">
					<text>uni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-titleuni-app-title</text>
				</view>
				<view class="card-content__desc">
					<view class="card-content__desc-label">
						<view class="card-content__desc-label-item">
							uni-app-desc
						</view>
					</view>
					<view class="card-content__desc-browser">
						card-content__desc-label
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list-card {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000, $alpha: 0.1);
		;
		box-sizing: border-box;

		.card-image {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.card-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.card-content__title {
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient:vertical;
				}
			}

			.card-content__desc {
				display: flex;
				justify-content: space-between;
				font-size: 12px;

				.card-content__desc-label {
					display: flex;

					.card-content__desc-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;

					}
				}

				.card-content__desc-browser {
					color: #999;
					line-height: 1.5;
				}
			}
		}
	}
</style>
