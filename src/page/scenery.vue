<template>
	<div class="scenery">
		<!--头部-->
		<template>
			<y-header></y-header>
		</template>
		<!--搜索项和图片-->
		<template>
			<y-search></y-search>
		</template>

		<template>
			<!--单个项，推荐-->
			<y-closest></y-closest>
		</template>

		<!--三项合并-->
		<template>
			<y-scenery></y-scenery>
		</template>

		<!--景色列表项，获取数据-->
		<template>
			<y-list></y-list>
		</template>

		<!--酒店列表项，获取数据-->
		<template>
			<y-hotel></y-hotel>
		</template>

		<!--jingse列表项，获取数据-->
		<template>
			<y-view></y-view>
		</template>

		<template>
			<y-bottom></y-bottom>
		</template>
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
				posid: 3,
				isActive: true,
				errorClass: 'error'
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