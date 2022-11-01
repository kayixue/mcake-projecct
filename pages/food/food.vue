<template>
	<view>
		xiaochi
		<u-rate :count="count" v-model="value"></u-rate>
		<my-comp></my-comp>
		
	</view>
</template>

<script>
	import MyComp from'../../components/text-my-comp.vue'
	export default {
			data() {
				return {
					count: 4,
					value: 2
				}
			},
			components:{
				'my-comp':MyComp
			},
			methods:{
				onload(){
					console.log('food页面的onLoad');
				},
				onShow(){
					console.log('food页面的onShow');
				},
				onHide(){
					console.log('food页面的onHide');
				},
			}
		}
</script>

<style>

</style>
