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
		<home-title 
		title="本季推荐" 
		enTitle="Seasonal Recommend"  
		enTit="Seasonal"></home-title>
		<scroll-view scroll-x="true" >
			<view class="scroll-inner">
				<image src="../../static/img/recommend1.jpeg" mode="heightFix"></image>
				<image src="../../static/img/recommend2.jpg" mode="heightFix"></image>
				<image src="../../static/img/recommend3.jpg" mode="heightFix"></image>
			</view>
		</scroll-view>
		<home-title 
		title="法式经典" 
		enTitle="French Classic" 
		enTit="French"></home-title>
		<image class="classify" src="../../static/img/french.jpg" mode=""></image>
		<view class="flex flex-wrap padding-xs justify-between">
			<good-item v-for="(item,index) in 4" ></good-item>
		</view>
		<view class="back-top">
			<text class="iconfont icon-tubiao_fanhuidingbu"></text>
		</view>
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
.scroll-inner{
	white-space: nowrap;
	image{
		height: 290upx;
		
	}
}
.classify{
	height: 380upx;
	width: 100%;
}
.back-top{
	height: 100upx;
	width: 100upx;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 0 0 10upx 4upx rgba(0,0,0,0.4);
	position: fixed;
	bottom: 40upx;
	right: 20upx;
	text-align: center;
	line-height: 100upx;
}


</style>
