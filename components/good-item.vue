<template>
	<view>
		<view class="cake-item">
			<view class="poster">

			</view>
			<view class="info-cont">
				<view class="info flex justify-between align-center">
					<view class="">
						<view class="fs-28">
							草莓蛋糕
						</view>
						<view class="fs-16">
							Caomei cake
						</view>
					</view>
					<view class="cart-btn margin-right-sm">
						<text class="iconfont icon-gouwuche "></text>
					</view>
				</view>
				<view class="fs-18">
					<text class="fs-14">¥</text>
					218.00
				</view>
				
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "good-item",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.cont {
		display: flex;
		flex-wrap: wrap;
		padding: 15upx;
		justify-content: space-between;

	}

	.cake-item {
		width: 350upx;

		.poster {
			height: 350upx;
			background-color: #f5f5f5;
		}

		.fs-28 {
			margin-top: 24upx;
		}

		.fs-16 {
			margin: 14upx 0;
		}

		.fs-18 {
			margin-bottom: 22upx;
		}
	}
	.cart-btn{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		background-color: #ffe32a;
		text-align: center;
		line-height: 60upx;
	}
</style>
