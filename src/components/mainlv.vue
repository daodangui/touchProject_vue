<template>
	<div class="mainlv">
		<h3>旅行特卖</h3>
		<div class="module-box">
			<div>
				<h4>【超值预售】【海洋赞礼号】2018年6月30日 天津-福冈-长崎-天津 5晚6日游</h4>
				<div class="countdown">
					<span>{{hour}}</span>
					<span>{{minute}}</span>
					<span>{{second}}</span>
				</div>
				<p><sub>￥</sub><span>3799</span><sub>起</sub></p>
				<p>更多抢购&gt;</p>
			</div>
			<div>
				<div v-for="i in 2">
					<a href=""></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

var gtime = 1*60*60 + 30*60;
var ghour = parseInt(gtime/3600);
var gminute = parseInt(gtime%3600/60);
var gsecond = parseInt(gtime%3600%60);
export default {
	data(){
		return {
			hour: ghour,
			minute: gminute,
			second: gsecond 
		}
	},
	mounted(){
		var $this = this;
		var t = setInterval(function(){
			gtime--;
			$this.hour = parseInt(gtime/3600);
			$this.minute = parseInt(gtime%3600/60);
			$this.second = parseInt(gtime%3600%60); 
			if(gtime == 0) clearInterval(t);
		},1000);
	}
}
</script>

<style lang="scss" scoped>
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.mainlv{
	height: 3.1914rem;
	background: #fff;
	@include flexbox;
	@include flex-flow(column wrap);
	h3{
		font-size: .27rem;
		text-align: center;
		font-weight: normal;
		height: .6314rem;
		background: #eee;
		line-height: .6314rem;
		color: #1994f4;
		vertical-align: top;
		&:before{
			content: '';
			display: inline-block;
			vertical-align: top;
			width: .5rem;
			height: .4rem;
			position: relative;
			top: .1rem;
			background: url(../assets/images/limages/iconsprite.png) no-repeat 0px -4.25rem;
			@include background-size(.5rem auto);
		}
	}
	.module-box{
		@include flex;
		@include flexbox;
		width: 100%;
		&>div{
			@include flex;
			position: relative;
			&:first-child{
				border-right: .01rem solid #ddd;
				background: url(../assets/images/limages/xsqg.jpg) no-repeat;
				@include background-size(100% 100%);
				padding: .08rem;
				h4{
					font-weight: normal;
					font-size: .23rem;
					width: 100%;
					height: .7rem;
					overflow: hidden;
					margin-top: .7rem;
				}
				.countdown{
					position: absolute;
					right: .13rem;
					top: .35rem;
					font-size: .18rem;
					color: #fff;
					span{
						margin-right: .24rem;
					}
				}
				p:nth-of-type(1){
					font-size: .24rem;	
					color: #f63;
					span{
						font-size: .33rem;
						font-weight: bold;
					}
					sub:last-child{
						color: #333;
					}
				}
				p:last-child{
					font-size: .20rem;
					color: #666;
					margin: .05rem 0rem;
					margin-left: .1rem;
				}
			}
			&:last-child{
				@include flexbox;
				@include flex-flow(column wrap);
				&>div{
					@include flex;
					width: 100%;
					a{
						display: inline-block;
						width: 100%;
						height: 100%;
						img{
							width: 100%;
							height: 100%;
						}
					}
					&:first-child{
						border-bottom: .01rem solid #ddd;
						a{
							background: url(../assets/images/limages/gnytm.png);
							@include background-size(100% 100%);
						}
					}
					&:last-child{
						a{
							background: url(../assets/images/limages/cjtm.jpg);
							@include background-size(100% 100%);
						}
					}
				}
			}
		}
	}
}

</style>