<template>
	<view>
		<!-- 基础模式 -->
		<view class="list-card" v-if="mode === 'base'">
			<view class="card-image">
				<image src="../../static/logo.png" mode="aspectFill" />
			</view>
			<view class="card-content">
				<view class="card-content__title">
					<text>uni-app-title</text>
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
		<!-- 多图模式 -->
		<view class="list-card mode-column" v-else-if="mode === 'column'">
			<view class="card-content">
				<view class="card-content__title">
					<text>uni-app-title</text>
				</view>
				<view class="card-image">
					<view v-for="(item,index) in 3" :key="index" class="card-image__item">
						<image src="../../static/logo.png" mode="aspectFill" />
					</view>
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
		<!-- 大图模式 -->
		<view class="list-card mode-image" v-else-if="mode === 'image'">
			<view class="card-image">
				<image src="../../static/logo.png" mode="aspectFill" />
			</view>
			<view class="card-content">
				<view class="card-content__title">
					<text>uni-app-title</text>
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
		},
		props: {
			mode: {
				type: String,
				default: 'base'
			}
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
				line-height: 1.2;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
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

		&.mode-column {
			.card-image {
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;

				.card-image__item {
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;

					&:first-child {
						margin-left: 0;
					}

					imge {
						width: 100%;
						height: 100%;
					}
				}
			}

			.card-content__desc {
				margin-top: 10px;
			}
		}

		&.mode-image {
			flex-direction: column;

			.card-image {
				width: 100%;
				height: 100px;

			}

			.card-content {
				padding-left: 0;
				margin-top: 10px;

				.card-content_desc {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}

			}
		}
	}
</style>
