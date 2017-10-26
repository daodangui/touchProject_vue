<template>
	<div class="closest">
		<div class="closest-title">
			<a href="">离你最近</a>
			<a href="">查看全部</a>
		</div>

		<div class="closest-content">
			<div class="content-wrap">
				<a href="">
					<div class="cell-left">
						<img src="../../assets/images/yimages/content.jpg" />
					</div>

					<div class="cell-right">
						<h2>北京泰山皮影戏 <span>(0A)</span></h2>
						
						<div class="cell-money">
							<p>
								<span class="yj">¥</span>
								<span class="money">68</span>
								<span class="qi">起</span>
							</p>
						</div>
						
						<div class="cell-count">
							<p>    
								<span class="dp-count">0条点评</span>     
								<span class="my-count">0%</span>    
								<span class="my-text">满意</span>      
							</p>
						</div>
						
						<div class="cell-desc">    
							<p>本周销量：0份</p>      
							<p class="distance">1.21km</p>      
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	// import '../../media/images/yimages/content.jpg';
</script>

<style lang="scss" scoped="scoped">
	.closest {
		width: 100%;
		height: 1.48rem;
		background: white;
		margin-bottom: 0.1rem;
		.closest-title {
			width: 100%;
			height: 0.31rem;
			padding: 0.1rem 0.1rem 0;
			display: flex;
			justify-content: space-between;
			a:nth-child(1) {}
			a:nth-child(2) {
				padding-right: 0.06rem;
				position: relative;
				&::after {
					position: absolute;
					top: 0.05rem;
					right: 0;
					display: block;
					width: 0.06rem;
					height: 0.06rem;
					content: "";
					-webkit-transform: rotate(135deg);
					transform: rotate(135deg);
					border-top: 0.02rem solid #ccc;
					border-left: 0.02rem solid #ccc;
				}
			}
		}
		.closest-content {
			width: 100%;
			height: 1.11rem;
			/*background: khaki;*/
			padding: 0 0.1rem 0.05rem;
			.content-wrap {
				width: 100%;
				height: 100%;
				a {
					display: flex;
					justify-content: space-between;
					padding-top: 0.1rem;
					width: 100%;
					height: 100%;
					.cell-left {
						width: 0.9rem;
						height: 0.9rem;
						img {
							width: 0.9rem;
							height: 0.9rem;
						}
					}
					.cell-right {
						width: 2rem;
						height: 0.96rem;
						/*background: honeydew;*/
						h2 {
							width: 100%;
							height: 0.23rem;
							color: #333;
							font-size: 0.16rem;
							font-weight: 400;
							line-height: 0.23rem;
						}
						.cell-money {
							width: 100%;
							height: 0.2rem;
							p {
								width: 100%;
								height: 0.2rem;
								line-height: 0.2rem;
								.yj {
									font-size: 0.12rem;
									color: #ff4614;
									font-family: Arial;
								}
								.money {
									font-size: 0.2rem;
									color: #ff4614;
									font-family: Arial;
								}
							}
						}
						.cell-count{
							width: 100%;
							height: 0.14rem;
							margin-top: 0.02rem;
							p{
								.dp-count{
									color: #777;
									margin-right: 0.05rem;
								}
								.my-count{
									color: #23beae;
								}
								.dp-text{
									color: #777;
								}
							}
						}
						.cell-desc{
							width: 100%;
							height: 0.21rem;
							margin-top: 0.02rem;
							display: flex;
							color: #777;
							justify-content: space-between;
							P{
								line-height: 0.21rem;
							}
						}
					}
				}
			}
		}
	}
</style>