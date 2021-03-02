<template>
	<view class="scroll">
		<scroll-view scroll-y class="scroll-list">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
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
	.scroll {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.scroll-list {
			height: 100%;
		}
	}
</style>
