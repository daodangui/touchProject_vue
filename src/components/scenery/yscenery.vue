<template>
	<div class="scenery">
		<div class="scenery-nav">
			<div class="nav-left">
				<a href="javascript:void(0)">
					<div class="nav-left-content">
						<span>北京景点</span>
						<p>当地热门景点推荐</p>
					</div>
					<img src="../../assets/images/yimages/left.png" />
				</a>
			</div>

			<div class="nav-right">
				<a href="javascript:void(0)">
					<div class="nav-right-content">
						<span>今日票</span>
						<p>今日可入园票推荐</p>
					</div>
					<img src="../../assets/images/yimages/right.png" />
				</a>
			</div>
		</div>

		<div class="scenery-img">
			<a href="javascript:void(0)">
				<img src="../../assets/images/yimages/banner.png" />
			</a>
		</div>

		<div class="scenery-sort">
			<a href="javascript:void(0)">
				<div class="ticket">
					<h4>门票1元起</h4>
					<span>PLUS会员专享</span>
				</div>
				<div class="img-wrap">
					<img src="../../assets/images/yimages/circle.jpg" alt="">
				</div>
			</a>


			<a href="javascript:void(0)">
				<div class="ticket">
					<h4>口碑精选</h4>
					<span>金秋畅游</span>
				</div>
				<div class="img-wrap">
					<img src="../../assets/images/yimages/circle1.png" alt="">
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped="scoped">
	.scenery {
		width: 100%;
		height: 2.28rem;
		margin-bottom: 0.1rem;
		.scenery-nav {
			width: 100%;
			height: 0.64rem;
			padding: 0 0.1rem;
			background: url(../../assets/images/yimages//nav_bg.png) no-repeat center;
			display: flex;
			flex-direction: row;
			.nav-left {
				flex: 1;
				a {
					display: inline-block;
					margin-top: 0.08rem;
					img {
						width: 0.43rem;
						height: 0.43rem;
						vertical-align: bottom;
					}
					.nav-left-content {
						display: inline-block;
						color: white;
						width: 0.95rem;
						height: 0.32rem;
						position: relative;
						top: 0.05rem;
						left: 0.05rem;
						span {
							font-size: 0.14rem;
						}
						p {
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							width: 0.95rem;
						}
					}
				}
			}
			.nav-right {
				flex: 1;
				a {
					width: 1.5rem;
					display: inline-block;
					margin-top: 0.08rem;
					position: relative;
					left: 0.16rem;
					img {
						width: 0.43rem;
						height: 0.43rem;
						vertical-align: bottom;
					}
					.nav-right-content {
						display: inline-block;
						color: white;
						width: 0.95rem;
						height: 0.32rem;
						position: relative;
						top: 0.05rem;
						left: 0.05rem;
						span {
							font-size: 0.14rem;
						}
						p {
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							width: 0.95rem;
						}
					}
				}
			}
		}
		.scenery-img {
			width: 100%;
			height: 0.81rem;
			margin-top: 0.1rem;
			background: white;
			border-bottom: solid 1px #dcdcdc;
			a {
				display: inline-block;
				width: 100%;
				height: 0.8rem;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.scenery-sort {
			width: 100%;
			height: 0.73rem;
			display: flex;
			background: white;
			justify-content: space-between;
			a{
				
				padding: 0.1rem 0 0.1rem 0.1rem;
				.ticket {
					width: 0.9rem;
					height: 0.5rem;
					display: inline-block;
					margin-top: 0.02rem;
					h4 {
						font-size: 0.15rem;
						color: #333;
						font-weight: 700;
						margin: 0.03rem;
					}
					span {
						color: #666;
						line-height: 0.15rem;
						padding: 0.02rem 0.05rem;
						border: 1px solid #bea165;
						border-radius: 0.37rem;
						overflow: hidden;
						text-align: center;
						display: block;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
				.img-wrap {
					display: inline-block;
					width: 0.6rem;
					height: 0.6rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			a:nth-child(1) {
				flex: 1;
				display: flex;
				/*background: saddlebrown;*/
				flex-direction: row;
			}
			a:nth-child(2) {
				flex: 1;
				display: flex;
				/*background: khaki;*/
				flex-direction: row;
			    border-left: solid #dcdcdc 1px;
			}
		}
	}
</style>