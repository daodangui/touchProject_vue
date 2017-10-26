<template>
	<div class="search-bg">
		<div class="search">
			<div class="search-box">
				<span class="city">
                <span>北京</span>
				<i></i>
				</span>
				<span class="s_search">城市/景点/主题</span>
			</div>
		</div>

		<div class="bg">
			<a href="">
				<img src="../../assets/images/yimages/bg.jpg" />
			</a>
		</div>
	</div>
</template>

<script>
	// import '../../media/images/yimages/cityDownIcon.png';
	// import '../../media/images/yimages/icon_search.png';
	// import '../../media/images/yimages/bg.jpg';
</script>

<style lang="scss" scoped="scoped">
	.search-bg {
		width: 100%;
		height: 1.49rem;
		.search {
			width: 100%;
			height: 0.49rem;
			padding: 0.11rem 0.17rem 0.12rem;
			background-color: #f2f4f7;
			.search-box {
				width: 100%;
				height: 100%;
				background: white;
				border-radius: 0.13rem;
				.city {
					display: inline-block;
					width: 0.68rem;
					height: 0.15rem;
					border-right: 1px solid #ddd;
					margin-top: 0.05rem;
					text-align: right;
					i {
						display: inline-block;
						width: 0.12rem;
						height: 0.15rem;
						background: url(../../assets/images/yimages/cityDownIcon.png) no-repeat center;
						margin: 0px 0.04rem;
						background-size: 0.09rem;
						vertical-align: middle;
					}
					span {
						color: #999
					}
				}
				.s_search {
					display: inline-block;
					width: 2.1rem;
					padding-left: 0.32rem;
					background: url(../../assets/images/yimages/icon_search.png) no-repeat 0.15rem 0.03rem;
					background-size: .12rem;
					color: #d0d0d0;
				}
			}
		}
		.bg{
			width: 100%;
			height: 1rem;
			a{
				width: 100%;
				height: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>