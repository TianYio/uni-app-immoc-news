<template>
	<view class="home">
		<navbar />
		<tab :list="tabList" :activeIndex="tabIndex" @tabToggle="tabToggle" />
		<swiper-list class="home-swiper-list" :current="tabIndex" :list="tabList" @swiperToggle="swiperToggle" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [],
				tabIndex: 0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			async getLabel() {
				try {
					let {
						data
					} = await this.$api.GetLabel();
					this.tabList = Object.freeze(data);
				} catch (e) {
					//TODO handle the exception
					throw new Error(e)
				}

			},
			tabToggle({
				data,
				index
			}) {
				this.tabIndex = index;
			},
			swiperToggle(current) {
				this.tabIndex = current
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.home-swiper-list {
			flex: 1;
			box-sizing: border-box;
			overflow: hidden;
			// border: 1px solid red;
		}
	}
</style>
