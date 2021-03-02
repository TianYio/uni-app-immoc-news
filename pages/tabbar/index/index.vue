<template>
	<view class="home">
		<navbar />
		<tab :list="tabList" @tabToggle="tabToggle" />
		<list-scroll>
			<list-card mode='base' />
			<list-card mode='image' />
			<list-card mode='column' />
		</list-scroll>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: []
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
				console.log(data, index)
			},
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
	}
</style>
