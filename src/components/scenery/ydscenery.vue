<template>
	<div class="aa">
		<div class="scenery" v-for="(n,j) in 2" :key="j">
			<p>
				<span v-if="n==1">相似景点</span>
				<span v-if="n==2">周边推荐</span>
			</p>

			<ul class="scenery-list">
				<template v-if="n==1">
					<li v-for="(list,i) in dataList.Scenerylist" :key="i">
						<a href="javascript:void(0)">
							<img :src="list.SceneryImg" alt="" />
							<div class="scenery-info">
								<h4>{{list.SceneryName}}</h4>
								<p>{{list.Describe}}</p>

								<div class="tips">
									<span>{{list.CommentNumber}}条点评</span>&nbsp;
									<span>{{list.Satisfaction*100}}%满意</span>
								</div>
							</div>

							<div class="scenery-price">
								<span>
							<i>￥</i>
							<b>{{list.LowPrice}}</b>起
						</span>
							</div>
						</a>
					</li>
				</template>

				<template v-else>
					<li v-for="(list,i) in dataList.PeripheryScenerylist" :key="i">
						<a href="javascript:void(0)">
							<img :src="list.SceneryImg" alt="" />
							<div class="scenery-info">	
								<h4>{{list.SceneryName}}</h4>
								<p>{{list.Describe}}</p>

								<div class="tips">
									<span>{{list.CommentNumber}}条点评</span>&nbsp;
									<span>{{list.Satisfaction}}%满意</span>
								</div>
							</div>

							<div class="scenery-price">
								<span>
									<i>￥</i>
									<b>{{list.LowPrice}}</b>起
								</span>

								<span class="location">距景点{{(list.Distance/1000).toFixed(1)}}km</span>
							</div>
						</a>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				dataList: [],
				recommend :"周边推荐"
			}
		},
		methods:{
			gotocollect() {
				
			}
		},
		mounted() {
			axios.get('/aaa/dview.php')
				.then((res) => {
					const data = res.data;
					this.dataList = data;
				})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import "../../style/yo/lib/core/merge-extra";
	@import "../../style/yo/lib/core/merge-config";
	@import "../../style/yo/lib/core/function";
	@import "../../style/yo/lib/core/classes";
	.aa {
		width: 100%;
		.scenery {
			width: 100%;
			padding-top: 0.1rem;
			margin-top: 0.1rem;
			background: white;
			>p {
				width: 100%;
				text-align: center;
				line-height: 0.26rem;
				height: 0.36rem;
				padding: 0.05rem 0;
				background: url(../../assets/images/yimages/title_bg.jpg) no-repeat;
				background-size: 3.2rem 0.36rem;
				font-size: 0.16rem;
				font-weight: bold;
			}
			.scenery-list {
				width: 100%;
				li {
					width: 100%;
					height: 0.81rem;
					padding: 0.1rem 0.1rem 0;
					a {
						display: inline-block;
						width: 3rem;
						height: 0.71rem;
						padding-bottom: 0.1rem;
						border-bottom: 1px solid #eee;
						display: flex;
						flex-direction: row;
						img {
							width: 0.6rem;
							height: 0.6rem;
						}
						.scenery-info {
							width: 1.68rem;
							height: 0.6rem;
							padding-left: 0.1rem;
							h4 {
								width: 1.58rem;
								height: 0.21rem;
								font-size: 0.14rem;
								color: #333;
								font-weight: 400;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
							p {
								line-height: 0.18rem;
								font-size: 12px;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
							.tips,
							p {
								height: 0.18rem;
								width: 100%;
								color: #999;
							}
						}
						.scenery-price {
							width: 0.72rem;
							height: 0.6rem;
							text-align: right;
					        span {
								color: #b299b2;
								display: inline-block;
								b {
									font-size: 0.16rem;
									color: #f63;
								}
								i {
									color: #f63;
									position: relative;
									left: 0.03rem;
								}
							}
							.location {
								display: block;
								max-width: 0.85rem;
								height: 0.12rem;
								overflow: hidden;
								margin-top: 0.2rem;
								font-size: 0.1rem;
								line-height: 1em;
								background-color: #f0f0f0;
								color: #999;
								border-radius: 0.1rem;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
					}
				}
			}
		}
	}
</style>