<template>
	<view>
		<button type="primary" @click="handleBack">
			返回
		</button>
		<button type="default" @click="handleMine">
			访问个人中心
		</button>
	商品详情
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options){
			console.log(options);
		},
		methods:{
			handleBack(){
				uni.navigateBack({
					delta:1
				})
			},
			handleMine(){
				uni.switchTab({
					url:'/pages/food/food'
				})
				// uni.navigateTo({
				// 	url:'/pages/my/my'
				// }) 可跳转但不可以跳转底部菜单页（my现在不是底部菜单页）
			}
		}
	}
</script>

<style>

</style>
