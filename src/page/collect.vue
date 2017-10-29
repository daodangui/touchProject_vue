<template>
	<div class="collect" :class="ani">
		<header class="colheader">
			<cpt-head />
		</header>
		<section class="colcontent">
			<div @click="tomycollect(titles[0])">
				<mt-cell :title="titles[0]"  :is-link="true">
					<img slot="icon" src="../assets/iconfont/hotel.png" width="20" height="20">
				</mt-cell>
			</div>
			<div @click="tomycollect(titles[1])">
				<mt-cell :title="titles[1]" :is-link="true">
					<img slot="icon" src="../assets/iconfont/cruise.png" width="20" height="20">
				</mt-cell>
			</div>
			<div @click="tomycollect(titles[2])">
				<mt-cell :title="titles[2]" :is-link="true">
					<img slot="icon" src="../assets/iconfont/rim.png" width="20" height="20">
				</mt-cell>
			</div>
			<div @click="tomycollect(titles[3])">
				<mt-cell :title="titles[3]" :is-link="true">
					<img slot="icon" src="../assets/iconfont/chujing.png" width="20" height="20">
				</mt-cell>
			</div>
			<div @click="tomycollect(titles[4])">
				<mt-cell :title="titles[4]" :is-link="true">
					<img slot="icon" src="../assets/iconfont/guoneiyou.png" width="20" height="20">
				</mt-cell>
			</div>
			<div @click="tomycollect(titles[5])">
				<mt-cell :title="titles[5]" :is-link="true">
					<img slot="icon" src="../assets/iconfont/haiwaiyou.png" width="20" height="20">
				</mt-cell>
			</div>
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
			},
			titles: ['酒店收藏','游轮收藏','周边游收藏','出境游收藏','国内游收藏','海外玩乐收藏']
		}
	},
	components: {
		'cpt-head': cptHead
	},
	methods: {
		tomycollect(title){
			this.$store.commit('pushTitle', {
				title: title,
				route: '/mycollect'
			})
			this.$router.push('/mycollect')
		}
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw'
	},
	// destroyed(){
		// this.$store.commit('changeTitle', '我的同程')
	// }
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