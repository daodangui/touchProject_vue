<template lang="html">
	<nav class="mainnav">
		<div class="homenav">
			<div v-for="n in 3" class="row" :class="'row-' + n">
				<div v-for="i in 3" class="col">
					<template v-if="n == 2">
						<a href="" :style="getbgurl()">{{getHomenav()}}</a>
					</template>
					<template v-else>
						<template v-if="n == 1 && i == 1">
							<a @click="toScenery()" :style="getbgurl()">{{getHomenav()}}</a>
							<a href="" :style="getbgurl()">{{getHomenav()}}</a>
						</template>
						<template v-else>
							<a href="" :style="getbgurl()">{{getHomenav()}}</a>
							<a href="" :style="getbgurl()">{{getHomenav()}}</a>
						</template>
					</template>
				</div>
			</div>
		</div>
		<div class="subnav">
			<div class="subnavitem" v-for="i in subnav" :key="i.id">
				<template v-if="i == '微社区'">
					<router-link tag="a" href="javascript:void(0)" to="/square">
						<i class="spicon"></i>
						<em>{{i}}</em>
					</router-link>
				</template>
				<template v-else>
					<a href="">
						<i class="spicon"></i>
						<em>{{i}}</em>
					</a>
				</template>
				
			</div>
		</div>
	</nav>
</template>

<script>


var k = 0;
var t = 0;
export default {
	data(){
		return {
			homenav: ['景点门票','电影票','酒店','民宿•客栈','周边自由行','周边跟团游','机票','火车票','汽车票','国内游','包团定制','出境游','海外玩乐','游轮','攻略游记'],
			bgurl: [
				'https://pic4.40017.cn/index/slide/2017/02/27/10/DEaHue.png',
				'https://pic4.40017.cn/index/slide/2017/02/27/10/Y8OI6g.png',
				'https://pic4.40017.cn/index/slide/2016/09/28/14/ahKDbx.png',
				'https://pic4.40017.cn/index/slide/2017/02/27/10/jKVbKd.png',
				'https://pic4.40017.cn/index/slide/2016/09/28/14/Brvn1e.png',
				'https://pic4.40017.cn/index/slide/2016/09/28/14/eimbzY.png',
				'https://pic4.40017.cn/index/slide/2016/09/28/14/ayuqeS.png',
				'https://pic4.40017.cn/index/slide/2016/11/15/17/6U8QGc.jpg',
				'https://pic4.40017.cn/index/slide/2016/09/28/14/3CCZPv.png',
				'https://pic5.40017.cn/01/001/8b/76/rBLkBlj5vZaAbdTQAABAAGxbmlk220.png',
				'https://pic5.40017.cn/01/001/8a/fb/rBANC1j5vMaAJVYjAAAgAF64lhU621.jpg',
				'https://pic4.40017.cn/index/slide/2016/09/28/14/PUtaw2.png',
				'https://pic5.40017.cn/01/001/8b/76/rBLkBVj5vZeALLK3AAAgALOTjlw666.png',
				'https://pic4.40017.cn/index/slide/2016/09/28/14/3cG8zc.png',
				'https://pic5.40017.cn/01/001/8b/76/rBLkBVj5vZeAQzO0AAAgAPe4I-A251.png'
			],
			subnav:['签证','全球wifi','百旅会','微社区','保险']
		}
	},
	created(){
		k=t=0;
	},
	methods: {
		getHomenav(){
			return this.homenav[k++];
		},
		getbgurl(){
			return {
				backgroundImage: 'url('+this.bgurl[t++]+')',
				backgroundSize: '100% 100%'
			}
		},
		toScenery(){
			this.$store.commit('pushTitle', {
				title: '景点门票',
				route: '/scenery'
			})
			this.$router.push('/scenery')
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.mainnav{
	width: 97%;
	color: #fff;
	font-size: .3rem;
	height: 6.4334rem;
	margin: 0 auto;
	margin-top: .08rem;
	background-color: #fff;
	@include flexbox;
	@include flex-flow(column wrap);
	.homenav{
		height: 5.3414rem;
		.row{
			@include flexbox;
			.col{
				@include flex;
				@include flexbox;
				@include flex-flow(column wrap);
				a{
					padding-left: .3rem;
					color: #fff;
					@include flexbox;
					@include align-items;
					height: 100%;
					border: .01rem solid #eee;
					@include flex;
					width: 100%;
				}
			}
		}
		.row-1,.row-3{
			height: 2.0138rem;
		}
		.row-2{
			height: 1.1434rem;
			margin: 0.085rem 0;
		}
		
	}
	.subnav{
		@include flex;
		width: 100%;
		@include flexbox;
		padding: .08rem;
		.subnavitem{
			@include flex;
			text-align: center;
			font-size: .20rem;
			a{
				display: inline-block;
				width: 100%;
				height: 100%;
				color: #333;
				i{
					display: block;
					margin: 0px auto;
					width: .38rem;
					height: .5rem;
					margin-bottom: .08rem;
				}
			}
		}
		$sbnavicon: -1.32rem -1.95rem -122px -122px -122px;
		@for $i from 1 through 5{
			.subnavitem:nth-child(#{$i}){
				i{
					background: url(../assets/images/limages/iconsprite.png) no-repeat 0px nth($sbnavicon,$i);
					@include background-size(.5rem auto);
					@if $i == 2{
						width: .45rem;
					}@else if $i == 3{
						background: url(../assets/images/limages/hg.png) no-repeat;
						@include background-size(100% 100%);
					}@else if $i == 4{
						width: .42rem;
						background: url(../assets/images/limages/chat.png) no-repeat -1px;
						@include background-size(100% 90%);
					}@else if $i == 5{
						width: .45rem;
						background: url(../assets/images/limages/dp.png) no-repeat .02rem .05rem;
						@include background-size(1rem auto);
					}
				}
			}
		}
	}
}
</style>