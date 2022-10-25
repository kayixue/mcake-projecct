<template>
	<view>
		xiaochi
		<u-rate :count="count" v-model="value"></u-rate>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					count: 4,
					value: 2
				}
			}
		}
</script>

<style>

</style>
