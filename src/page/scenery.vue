<template>
	<div class="scenery">
		<!--头部-->
		<y-header></y-header>
		<!--搜索项和图片-->
		<y-search></y-search>

		<!--单个项，推荐-->
		<y-closest></y-closest>
		<!--三项合并-->
		<y-scenery></y-scenery>
	
		<!--景色列表项，获取数据-->
		<y-list></y-list>

		<!--酒店列表项，获取数据-->
		<y-hotel></y-hotel>

		<!--jingse列表项，获取数据-->
		<y-view></y-view>

		<y-bottom></y-bottom>
	</div>
</template>

<script>
	import yheader from '../components/scenery/yheader.vue';
	import ysearch from '../components/scenery/ysearch.vue';
	import yclosest from '../components/scenery/yclosest.vue';
	import yscenery from '../components/scenery/yscenery.vue';
	import ylist from '../components/scenery/ylist.vue';
	import ybottom from '../components/scenery/ybottom.vue';
	import yhotel from '../components/scenery/yhotel.vue';
	import yview from '../components/scenery/yview.vue';
	export default {
		data() {
			return {
				scroll: ''
			}
		},
		methods: {
			menu() {
				this.scroll = document.body.scrollTop;
				console.log(this.scroll)
			}
		},
		created() {
			document.documentElement.style.fontSize = '31.25vw';
		},
		mounted() {
		},
		components: {
			'y-header': yheader,
			'y-search': ysearch,
			'y-closest': yclosest,
			'y-scenery': yscenery,
			'y-list': ylist,
			'y-hotel': yhotel,
			'y-view': yview,
			'y-bottom': ybottom
		}
	}
</script>

<style>

</style>