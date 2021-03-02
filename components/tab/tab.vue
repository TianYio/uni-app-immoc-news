<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-scroll">
			<view class="tab-scroll__box">
				<view v-for="(item,index) in list" :key="item._id" @click="toggleActiveTab(item,index)" class="tab-scroll__item"
				 :class="{active: activeIndex === index}">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<!--  设置图标 -->
		<uni-icons type="gear" class="tab-icons" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0
			};
		},
		props: {
			list: {
				type: Array,
				required: true
			}
		},
		methods: {
			toggleActiveTab(tab, index) {
				this.activeIndex = index
				this.$emit('tabToggle', {
					data: tab,
					index
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #f5f5f5;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab-scroll__box {
				display: flex;
				height: 45px;
				flex-wrap: nowrap;
				align-content: flex-end;
				align-items: center;
				box-sizing: border-box;

				.tab-scroll__item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;

					&.active {
						color: $mk-base-color;
					}
				}
			}
		}

		.tab-icons {
			position: relative;
			display: flex;
			width: 45px;
			justify-content: center;
			align-items: center;

			&::before {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
