<template>
	<div class="details">
		<template>
			<y-header></y-header>
		</template>
		
		<template>
			<y-nav></y-nav>
		</template>
		
		<template>
			<y-ticket></y-ticket>
		</template>
		
		<template>
			<y-comment></y-comment>
		</template>
		
		<template>
			<y-scenery></y-scenery>
		</template>
		
		<template>
			<y-bottom></y-bottom>
		</template>
	</div>
</template>

<script>
	import yheader from '../components/scenery/yheader.vue';
	import ydnav from '../components/scenery/ydnav.vue';
	import ydticket from '../components/scenery/ydticket.vue';
	import ydcomment from '../components/scenery/ydcomment.vue';
	import ydscenery from '../components/scenery/ydscenery.vue';
	import ybottom from '../components/scenery/ybottom.vue';
//	import yd from './yd.vue';
	
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
		mounted() {
		},
		created(){
			document.documentElement.style.fontSize = '31.25vw';
		},
		components: {
			'y-header': yheader,
			'y-nav': ydnav,
			'y-ticket': ydticket,
			'y-comment': ydcomment,
			'y-scenery': ydscenery,
			'y-bottom': ybottom
		}
	}
</script>

<style>
</style>