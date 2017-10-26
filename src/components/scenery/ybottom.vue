<template>
	<div class="bottom">
		<div class="bottom-nav">
			<ul>
				<li>
					<a href="">客服电话</a>
				</li>
				<li>
					<a href="">下载客户端</a>
				</li>
				<li>
					<a href="">关于同程</a>
				</li>
				<li>
					<a href="">电脑版</a>
				</li>
			</ul>
			
			<p>2017同程旅游</p>
		</div>
	</div>
</template>

<script>
	// import '../../media/images/yimages/content.jpg';
</script>

<style lang="scss" scoped="scoped">
	.bottom{
		width: 100%;
		height: 0.58rem;
		background: #F2F4F7;
		.bottom-nav{
			width: 100%;
			height: 0.28rem;
			ul{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				li{
					flex: 1;
					display: flex;
					justify-content: center;
					a{
						color: #333333;
						font-size: 0.15rem;
					}
				}
			}
			p{
				width: 100%;
				height: 0.3rem;
				text-align: center;
				line-height: 0.3rem;
				color: #CCCCCC;
			}
		}
	}
</style>