<template>
	<div id="container" :class="ani">
		<header id="header">
			<cpt-head />
		</header>
		<section id="content">
			<!-- 头部巨幕 -->
			<cpt-login />
			<!-- 菜单选项 -->
			<cpt-nav />
		</section>
		<footer id="footer"> 
			<cpt-foot />
		</footer>
		<div class="memberMenu">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
//引入组件
import cptLogin from '@/components/member/login.vue';
import cptNav from '@/components/member/nav.vue';
import cptFoot from '@/components/member/memberfoot.vue';
import cptHead from '@/components/scenery/yheader.vue';

export default {
	data(){
		return {
			ani: {
				'ani': false,
				'elastic-in-right': false
			}
		}
	},
	components: {
		'cpt-login': cptLogin,
		'cpt-nav': cptNav,
		'cpt-foot': cptFoot,
		'cpt-head': cptHead
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw';
	},
	mounted(){
		this.ani.ani = true;
		this.ani['elastic-in-right'] = true;
	}
}
</script>

<style lang="scss" scoped>
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/reset";

#container{
	height: 100%;
	#header{
		height: .44rem;
		background: #fff;
	}
	footer{
		position: static;
	}
}

</style>