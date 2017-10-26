<template>
	<div class="detail">
		<div class="detail-wrap">
			<h4 class="h4">【上午场】北京故宫成人票（刷身份证入园）</h4>
			<div class="iconclass">
				<div class="left">
					<span>13:30前可预订今日票</span>
					<span>条件退</span>
				</div>
				
				<div class="right">
					<i>￥</i>
					<span>60</span>
					<strike>￥60</strike>
				</div>
			</div>

			<div class="label">
				<span>PLUS尊享价￥40起</span>
			</div>
			<div class="declare">
				<a href="">票型说明></a>
				<span>在线支付</span>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../media/images/yimages/labelicon.png';
</script>

<style lang="scss" scoped="scoped">
	/*@import "../../style/yo/lib/core/merge-extra";*/
	/*@import "../../style/yo/lib/core/merge-config";*/
	/*@import "../../style/yo/lib/core/function";*/
	/*@import "../../style/yo/lib/core/classes";*/
	
	.detail {
		width: 100%;
		height: 1.38rem;
		background: khaki;
		.detail-wrap {
			width: 100%;
			height: 1.38rem;
			padding: 0.1rem 0.15rem;
			border-bottom: 1px solid #dcdcdc;
			h4 {
				width: 100%;
				padding-right: 80px;
				box-sizing: border-box;
				color: #333;
				font-size: 14px;
				overflow: hidden;
				margin-bottom: 5px;
				text-overflow: ellipsis;
				display: -webkit-box;
			}
			.iconclass {
				width: 100%;
				/*padding-right: 62px;*/
				display: flex;
				justify-content: space-between;
				line-height: 12px;
				padding-top: 5px;
				.left{
					>span::before {
						content: '';
						display: inline-block;
						background-image: url(/media/images/labelicon.png);
						background-repeat: no-repeat;
						background-size: 11px 11px;
						height: 11px;
						width: 11px;
						margin-right: 5px;
						margin-bottom: 3px;
						vertical-align: middle;
					}
				}
				.right{
					span:nth-child(2){
						font-size: 0.18rem;
						color:#ff8400 ;
					}
					i:nth-child(1){
						font-size: 0.14rem;
						color:#ff8400 ;
					}
					i{
						position: relative;
						left: 0.05rem;
					}
				}
			}
			.label {
				width: 100%;
				padding-right: 62px;
				height: 28px;
				line-height: 28px;
				span {
					color: #f63;
					border: 1px solid #f63;
					border-radius: 3px;
					font-size: 10px;
					padding: 1px 5px;
				}
			}
			.declare {
				width: 100%;
				display: flex;
				justify-content: space-between;
				a {
					color: #999;
				}
				span {
					height: 42px;
					background: #ff8400;
					border: 1px solid #ff8400;
					border-radius: 3px;
					color: #fff;
					width: 75px;
					font-size: 14px;
					line-height: 30px;
					height: 30px;
					text-align: center;
					overflow: hidden;
				}
			}
		}
	}
</style>