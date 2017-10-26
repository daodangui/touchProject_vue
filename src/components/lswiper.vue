<template lang="html">
	<div class="swiper">
		<mt-swipe :auto="4000" class="swiperbox">
			<template v-for="item in swiperurl">
			  <mt-swipe-item>
			  	<a href="">
			  		<img :src="item" alt="">
			  	</a>
			  </mt-swipe-item>
			</template>
		</mt-swipe>
	</div>
</template>

<script>
	
export default {
	data(){
		return {
			swiperurl:[
				'https://pic5.40017.cn/02/000/07/ce/rBANDFnog0iAdNvhAAMRN1M2rs4186.jpg',
				'https://pic5.40017.cn/01/001/1d/88/rBLkBlnvCXuAEr33AADfFr09L50644.jpg',
				'https://pic4.40017.cn/index/slide/2017/03/21/14/DsQYR7.jpg.webp',
				'https://pic4.40017.cn/index/slide/2017/03/21/14/jLvNMj.jpg.webp',
				'https://pic4.40017.cn/index/slide/2017/03/21/11/86PQJh.jpg.webp',
				'https://pic4.40017.cn/index/slide/2017/02/11/21/Upv1S6.jpg.webp',
				'https://pic5.40017.cn/01/001/1d/88/rBLkBlnvCXuAEr33AADfFr09L50644.jpg'
			]
		}
	}
}
</script>

<style lang="scss">
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.swiper{
	width: 100%;
	height: 1.6213rem;
	img{
		width: 100%;
		height: 100%;
	}
}

</style>