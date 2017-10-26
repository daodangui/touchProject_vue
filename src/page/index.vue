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
			<template>
				<cpt-mainnav />
			</template>
			<!-- 热门目的地 -->
			<template>
				<cpt-mainhot />
			</template>
			<!-- 旅行特卖 -->
			<template>
				<cpt-mainlv />
			</template>
			<!-- 精选活动 -->
			<template>
				<cpt-mainactivity />
			</template>
			<!-- 热门玩法 -->
			<template>
				<cpt-mainhotplay />
			</template>
		</section>
		<footer id="footer">
			<template>
				<cpt-mainfoot />
			</template>
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