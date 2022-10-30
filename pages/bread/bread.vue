<template>
	<view>
		<view class="flex justify-between padding">
			<view class="">
				草莓蛋糕
			</view>
			<view class=""> 
			购物车按钮{{Num}}
			</view>
			<test-my-comp name="张" @onNum="Num++"></test-my-comp>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Num:100
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
// @import '../../colorui/main.css';
// @import '../../colorui/main.css';
</style>
