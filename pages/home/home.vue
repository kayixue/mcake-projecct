<template>
	<view>
		<nav-custom></nav-custom>
		<swiper class="banner":indicator-dots="true" :autoplay="true" indicator-active-color="#ffe32a">
			<swiper-item v-for="(item,index) in 3">
				<view class="swiper-item">
					<image src="../../static/img/banner.jpg" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
		<home-title></home-title>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
.banner{
	height: 1000upx;
	swiper-item{
		height: 1000upx;
	}
	image{
		width: 100%;
		height: 1000upx;
	}
}

</style>
