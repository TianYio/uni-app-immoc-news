<template>
	<swiper :current="current" @change="toggleSwiper">
		<swiper-item class="swiper-item" v-for="(item,index) in list" :key="item._id">
			<!-- <swiper-list-item /> -->
			{{index}}
		</swiper-item>
	</swiper>
</template>

<script>
	import SwiperListItem from './swiper-list-item.vue'
	export default {
		components: {
			SwiperListItem
		},
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			current: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			};
		},
		methods: {
			toggleSwiper({
				detail = {
					current: 0
				}
			}) {
				const {
					current = 0
				} = detail
				this.$emit('swiperToggle', current)
			}
		},
	}
</script>

<style lang="scss">
	.swiper-item {
		height: 100%;
		overflow: hidden;
	}
</style>
