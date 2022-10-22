<template>
	<view>
		<view class="cont">
			<view class="margin bg-fff">
				<view class="flex grid">
					<view v-for="(item,index) in gridArr" class="flex flex-direction align-center padding">
						<text :class="['iconfont margin-bottom-xs',item.icon]"></text>
						{{item.name}}
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
				gridArr: [{
						icon: 'icon-danju',
						name: '我的订单'
					},
					{
						icon: 'icon-jifen',
						name: '待收货'
					},
					{
						icon: 'icon-ziliaoshouce',
						name: '待付款'
					},
					{
						icon: 'icon-vip-fill',
						name: '会员等级'
					}
				]

			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}

	.grid .iconfont{
		font-size: 60upx;
		color: #888;
	}
</style>
