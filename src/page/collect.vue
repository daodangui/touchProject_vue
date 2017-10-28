<template>
	<div class="collect" :class="ani">
		<header class="colheader">
			<cpt-head />
		</header>
		<section class="colcontent">
			<mt-cell title="酒店收藏" to="/mycollect" :is-link="true">
				<img slot="icon" src="../assets/iconfont/hotel.png" width="20" height="20">
			</mt-cell>
			<mt-cell title="游轮收藏" to="/mycollect" :is-link="true">
				<img slot="icon" src="../assets/iconfont/cruise.png" width="20" height="20">
			</mt-cell>
			<mt-cell title="周边游收藏" to="/mycollect" :is-link="true">
				<img slot="icon" src="../assets/iconfont/rim.png" width="20" height="20">
			</mt-cell>
			<mt-cell title="出境游收藏" to="/mycollect" :is-link="true">
				<img slot="icon" src="../assets/iconfont/chujing.png" width="20" height="20">
			</mt-cell>
			<mt-cell title="国内游收藏" to="/mycollect" :is-link="true">
				<img slot="icon" src="../assets/iconfont/guoneiyou.png" width="20" height="20">
			</mt-cell>
			<mt-cell title="海外玩乐收藏" to="/mycollect" :is-link="true">
				<img slot="icon" src="../assets/iconfont/haiwaiyou.png" width="20" height="20">
			</mt-cell>
		</section>
	</div>
</template>

<script>
import cptHead from '@/components/scenery/yheader.vue';

export default{
	data(){
		return {
			ani: {
				'ani': true,
				'elastic-in-right': true
			}
		}
	},
	components: {
		'cpt-head': cptHead
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw'
	}
}
	
</script>

<style lang="scss" scoped>

.collect{
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	background: #edf0f5;
	.colheader{
		height: .44rem;
		background: #fff;
	}
	.colcontent{
		padding-top: .15rem;
		font-size: .12rem; 
	}
}

</style>