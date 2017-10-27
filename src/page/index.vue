<template>
	<div id="container" class="mainview">
		<router-view></router-view>
		<header id="header">
			<cpt-header />
		</header>
		<section id="content">
			<div class="swiperBox">
				<cpt-swiper />
			</div>
			<cpt-mainnav />
			<!-- 热门目的地 -->
			<cpt-mainhot />
			<!-- 旅行特卖 -->
			<cpt-mainlv />
			<!-- 精选活动 -->
			<cpt-mainactivity />
			<!-- 热门玩法 -->
			<cpt-mainhotplay />
		</section>
		<footer id="footer">
			<cpt-mainfoot />
		</footer>
	</div>
</template>

<script>
//引入组件
import cptHeader from '../components/header.vue';
import cptSwiper from '../components/lswiper.vue';
import cptMainnav from '../components/mainnav.vue';
import cptMainhot from '../components/mainhot.vue';
import cptMainlv from '../components/mainlv.vue';
import cptMainactivity from '../components/mainactivity.vue';
import cptMainhotplay from '../components/mainhotplay.vue';
import cptMainfoot from '../components/mainfoot.vue';

import cptCityList from './cityList.vue';

export default {
	data(){
		return {

		}
	},
	components: {
		'cpt-header': cptHeader,
		'cpt-swiper': cptSwiper,
		'cpt-mainnav': cptMainnav,
		'cpt-mainhot': cptMainhot,
		'cpt-mainlv': cptMainlv,
		'cpt-mainactivity': cptMainactivity,
		'cpt-mainhotplay': cptMainhotplay,
		'cpt-mainfoot': cptMainfoot
	},
	created(){
		document.documentElement.style.fontSize = '15.625vw';
	}
}
</script>

<style lang="scss" scoped>

.mainview{
	width: 100%;
}

#container{
	margin: 0px auto;
	padding-top: .877rem;
	#content{
		width: 100%;
	}
}
</style>