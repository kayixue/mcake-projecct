<template>
	<view @click="handleNum">
		123，
		{{name}}
	</view>
</template>

<script>
import { methods } from 'uview-ui/libs/mixin/mixin';
	export default {
		name:"text-my-comp",
		props:['name'],
		data() {
				return {
					
				}
			},
			methods: {
				
			}
		}
</script lang="scss">

<style>

</style>