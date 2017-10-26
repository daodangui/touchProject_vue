<template>
	<div class="mainactivity">
		<h3>精选活动</h3>
		<div class="module-box">
			<div>
				<div>
					<a href=""></a>
				</div>
				<div>
					<a href=""></a>
					<a href=""></a>
				</div>
			</div>
			<div>
				<div v-for="i in 4"><a href=""></a></div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {

		}
	}
}
</script>

<style lang="scss" scoped>
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.mainactivity{
	height: 5.1199rem;
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
		color: #00bebd;
		vertical-align: top;
		&:before{
			content: '';
			display: inline-block;
			vertical-align: top;
			position: relative;
			top: .06rem;
			left: -.1rem;
			width: .4rem;
			height: .4rem;
			background: url(../assets/images/limages/iconsprite.png) no-repeat 0px -4.63rem;
			@include background-size(.5rem auto);
		}
	}
	.module-box{
		@include flex;
		@include flexbox;
		@include flex-flow(column wrap);
		width: 100%;
		&>div:first-child{
			height: 2.56rem;
			border-bottom: .01rem solid #ddd;
			@include flexbox;
			&>div{
				@include flex;
				&:first-child{
					border-right: .01rem solid #ddd;
					a{
						display: inline-block;
						width: 100%;
						height: 100%;
						background: url(../assets/images/limages/tcblh.jpg) no-repeat;
						@include background-size(100% 100%);
					}
				}
				&:last-child{
					a{
						display: inline-block;
						width: 100%;
						height: 50%;
					}
					&>a:first-child{
						background: url(../assets/images/limages/qsy.jpg) no-repeat;
						@include background-size(100% 100%);
						border-bottom: .01rem solid #ddd;
					}
					&>a:last-child{
						background: url(../assets/images/limages/qllmy.jpg) no-repeat;
						@include background-size(100% 100%);
					}
				}
			}
		}
		&>div:last-child{
			@include flex;
			@include flexbox;
			width: 100%;
			&>div{
				@include flex;
				&:not(:last-child){
					border-right: .01rem solid #ddd;
				}
			}
			$bgimg: 1ywjd dfxbl mskz ttcj;
			@for $i from 1 through 4{
				div:nth-child(#{$i}){
					a{
						display: inline-block;
						width: 100%;
						height: 100%;
						background: url("../assets/images/limages/#{nth($bgimg,$i)}.jpg");
						@include background-size(100% 100%);
					}
				}
			}
		}
	}
}
</style>