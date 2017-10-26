<template>
	<div class="mainhotplay">
		<h3>热门玩法</h3>
		<div class="module-box">
			<a href="" v-for="i in 4">
				<div>
					<div>
						<span>{{type[i-1]}}</span>
					</div>
					<h4>{{title[i-1]}}</h4>
				</div>
			</a>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {
			title: ['适合秋冬出游的海岛','到香港，一定要睡你','中国8大景点自驾路线','10月旅游目的地推荐'],
			type: ['海岛','住宿','自驾游','盘点']
		}
	}
}
	
</script>

<style lang="scss" scoped>
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.mainhotplay{
	height: 4.5051rem;
	color: #f48500;
	@include flexbox;
	@include flex-flow(column wrap);
	h3{
		font-size: .27rem;
		text-align: center;
		font-weight: normal;
		height: .6314rem;
		background: #eee;
		line-height: .6314rem;
		vertical-align: top;
		&:before{
			content: '';
			display: inline-block;
			vertical-align: top;
			width: .40rem;
			height: .45rem;
			position: relative;
			left: -.1rem;
			background: url(../assets/images/limages/iconsprite.png) no-repeat 0px -5.02rem;
			@include background-size(.5rem auto);
		}
	}
	.module-box{
		@include flex;
		width: 100%;
		padding: 0 .15rem;
		@include flexbox;
		@include justify-content(space-between);
		@include align-items;
		@include flex-flow(row wrap);
		&>a{
			display: inline-block;
			color: #fff;
			position: relative;
			font-weight: lighter;
			width: 49%;
			height: 47%;
			@include border-radius(.1rem);
			&>div{
				width: 100%;
				height: 100%;
				background-color: rgba(0,0,0,.3);
				@include overflow(hidden);
				h4{
					position: absolute;
					bottom: .1rem;
					font-size: .24rem;
					margin-left: .08rem;
					font-weight: lighter;
				}
				&>div{
					height: .28rem;
					width: auto;
					position: relative;
					display: inline-block;
					background: #fc5446;
					line-height: .28rem;
					font-size: .18rem;
					&:after{
						content: '';
						position: absolute;
						border: .236rem solid transparent;
						border-bottom-color: #fc5446;
						width: .2rem;
						height: .28rem;
						@include transform(rotate(-45deg));
						top: -.28rem;
						right: -.22rem;
					}
					span{
						margin: 0 .05rem;
					}
				}	
			}
		}
		$bgimgurl: 'https://pic5.40017.cn/01/000/07/9e/rBLkBlnoZ5CAd5s8AAGoaencbUU275_300x200_00.jpg'
			'https://pic5.40017.cn/01/000/04/0a/rBLkBVnnD7WAJr4nAACwvUkgJOo729_300x200_00.jpg' 
			'https://pic5.40017.cn/01/001/04/14/rBLkBVnnEiaADQysAAD4v4j0QKY062_300x200_00.jpg' 
			'https://pic4.40017.cn/poi/2016/09/28/20/jfN5UH_300x200_00.jpg';
		@for $i from 1 through 4{
			a:nth-child(#{$i}){
				background: url(nth($bgimgurl, $i)) no-repeat;
				@include background-size(100% 100%);
			}
		}
	}
}
</style>