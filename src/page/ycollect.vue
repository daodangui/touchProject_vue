<template>
	<div class="collect">
		<!--头部-->
			<y-header></y-header>
		<!--搜索项和图片-->
			<y-img></y-img>
		
			<y-info></y-info>
		
			<y-introduce></y-introduce>
			
			<y-instruction></y-instruction>
			
			<y-use></y-use>
			
			<y-blank></y-blank>
			
			<y-bottom></y-bottom>
	</div>
</template>

<script>
	import yheader from '../components/scenery/yheader.vue';
	import ycimg from '../components/collect/ycimg.vue';
	import ycinfo from '../components/collect/ycinfo.vue';
	import ycbottom from '../components/collect/ycbottom.vue';
	import ycintroduce from '../components/collect/ycintroduce.vue';
	import ycinstruction from '../components/collect/ycinstruction.vue';
	import ycuse from '../components/collect/ycuse.vue';
	import ycblank from '../components/collect/ycblank.vue';
	
	export default {
		data() {
			return {
			}
		},
		methods: {
		},
		created(){
			document.documentElement.style.fontSize = '31.25vw';
			
		},
		mounted() {
		},
		components: {
			'y-header': yheader,
			'y-img': ycimg,
			'y-info': ycinfo,
			'y-bottom': ycbottom,
			'y-introduce':ycintroduce,
			'y-instruction': ycinstruction,
			'y-use': ycuse,
			'y-blank': ycblank
		}
	}
</script>

<style>

</style>