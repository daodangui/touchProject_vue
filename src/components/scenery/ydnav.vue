<template>
	<div class="nav">
		<div class="pic">
			<a href="javascript:void(0)">
				<img src="../../assets/images/yimages/palace.jpg" />
			</a>
			<div class="pic-mask">
				<span>北京故宫</span>
				<span>共15张</span>
			</div>
		</div>

		<div class="bottombox">
			<div class="guard">
				<p>
					<em></em>
					<span>入园保障</span>
				</p>
			</div>

			<div class="bottomlist" v-for="(list,i) in dataList" :key="i">
				<img :src="list.Img" alt="" />
				<a href="javascript:void(0)">
					<span>{{list.Comment}}</span>
					<em></em>
				</a>
			</div>

			<div class="bottom-plus">
				<a href="javascript:void(0)">
					<img src="../../assets/images/yimages/plus_icon.png" /> PLUS会员优惠 最高立省
					<span class="plus_mon">20</span>元/张
					<span class="plus_span">
				 		立即开通
				 		<em class="gray-ico"></em>
				 	</span>
				</a>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
//	import '../../assets/images/yimages/palace.jpg';
//	import '../../assets/images/yimages/labelicon.png';
//	import '../../assets/images/yimages/a_comment.png';
//	import '../../assets/images/yimages/arrow_ico.png';
//	import '../../assets/images/yimages/plus_icon.png';

	export default {
		data() {
			return {
				dataList: [{
						"Img": "//img1.40017.cn/cn/s/2017/touch/scenery/final/a_comment.png",
						"Comment": "北京市景山前街4号"
					},
					{
						"Img": "//img1.40017.cn/cn/s/WX/jqzy/location.png",
						"Comment": "17450 条点评   4.7 分"
					},
					{
						"Img": "//img1.40017.cn/cn/s/2016/touch/scenery/final/brieficon.png",
						"Comment": "景点特色"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import "../../style/yo/lib/core/merge-extra";
	@import "../../style/yo/lib/core/merge-config";
	/*@import "../../style/yo/lib/core/function";*/
	/*@import "../../style/yo/lib/core/classes";*/

	.nav {
		width: 100%;
		height: 3.7rem;
		background: yellow;
		.pic {
			width: 100%;
			height: 1.8rem;
			position: relative;
			img {
				width: 100%;
				height: 100%;
			}
			.pic-mask {
				width: 100%;
				height: 0.44rem;
				padding: 0.1rem 0.1rem 0.1rem 0.15rem;
				position: absolute;
				bottom: 0;
				display: flex;
				justify-content: space-between;
				color: white;
				span:nth-child(1) {
					font-size: 0.16rem;
				}
			}
		}
		.bottombox {
			width: 100%;
			height: 1.9rem;
			border-bottom: 1px solid #dcdcdc;
			background: white;
			.guard {
				width: 100%;
				height: 0.26rem;
				padding: 0 0.15rem;
				background: #e9ecf1;
				p {
					width: 100%;
					height: 0.26rem;
					line-height: 0.26rem;
					em {
						display: inline-block;
						background: url(../../assets/images/yimages/labelicon.png) no-repeat;
						background-size: 11px 11px;
						height: 11px;
						width: 11px;
						margin-right: 5px;
						vertical-align: middle;
					}
				}
			}
			.bottomlist {
				width: 3.05rem;
				height: 0.43rem;
				margin-left: 0.15rem;
				border-bottom: 1px solid #dcdcdc;
				>img {
					width: 0.16rem;
					vertical-align: middle;
					position: relative;
					top: -0.03rem;
				}
				a {
					width: 3.01rem;
					height: 0.22rem;
					line-height: 0.43rem;
					padding: 0 0.15rem 0 0.1rem;
					color: #434d59;
					font-size: 14px;
					span {
						display: inline-block;
						width: 2.32rem;
					}
					em {
						margin-left: 0.12rem;
						display: inline-block;
						width: 7px;
						height: 13px;
						background: url(../../assets/images/yimages/arrow_ico.png) no-repeat;
						background-size: 7px 13px;
					}
				}
			}
			.bottom-plus {
				width: 100%;
				height: 0.33rem;
				background: #f9fafc;
				padding: 0 0.2rem 0 0.15rem;
				margin-bottom: 0.01rem;
				font-size: 0.1rem;
				a {
					display: inline-block;
					width: 100%;
					height: 100%;
					color: #434d59;
					line-height: 0.33rem;
					img {
						width: 0.26rem;
						height: 0.15rem;
						margin-right: 0.04rem;
					}
					.plus_span {
						display: flex;
						flex-direction: row;
						width: 0.73rem;
						display: inline-block;
						em {
							margin-left: 0.13rem;
							display: inline-block;
							width: 7px;
							height: 13px;
							background: url(../../assets/images/yimages/arrow_ico.png) no-repeat;
							background-size: 7px 13px;
						}
					}
				}
			}
		}
	}
</style>