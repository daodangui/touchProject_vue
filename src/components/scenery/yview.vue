<template>
	<div class="position">
		<div class="hotel-title" id="c">
			<span>精选周边景点</span>
		</div>
		<div class="list">
			<ul>
				
				<li v-for="(list,i) in dataList" :key="i">
					<a href="">
						<div class="list-left">
							<img :src="list.PictureUrl" alt=""/>
						</div>

						<div class="list-right">
							<h2>{{list.Name}} <span>(5A)</span></h2>

							<div class="list-money">
								<p class="detail">
									<span class="list-price">同程价</span>
									<span class="yj">¥</span>
									<span class="money">{{list.Pirce}}</span>
									<span class="qi">起</span>
								</p>
								<i></i>
								<p class="museums">
									<span>游乐场</span>
								</p>
							</div>

							<div class="list-count">
								<p class="list-count-wrap">
									<span class="dp-count">{{list.CommentCount}}万条点评</span>&nbsp;&nbsp;
									<span class="my-count">{{list.Satisfaction}}%</span>
									<span class="my-text">满意</span>
								</p>
							</div>

							<div class="list-desc">
								<p class="introduce">{{list.Summary}}</p>
								<p class="distance">{{list.DistanceToScenery}}km</p>
							</div>
						</div>
					</a>
				</li>
				
				
			</ul>
		</div>



		<div class="hot-bottom">
			<a href="">查看全部</a>
		</div>
	</div>
</template>

<script>
	// import '../../media/images/yimages/view.jpg';
	// import '../../media/images/yimages/list-bg.png';

	import axios from 'axios'
	export default {
		data() {
			return {
				dataList: [],
				//				isShowloading: true
			}
		},

		mounted() {
			var $this = this;
//			axios.get('/vip/view.php')
//				.then((res) => {
//					const data = res.data.data.SceneryList;
//					this.dataList = data;
//				})
			axios.post('/bip/gateway/scenery.resource/v1/resource/scenerysrcommend/nearcityscenery/?Labrador-Token=0a905013-886c-48d7-936f-c08226227398', {
		    		totalcount: 10,
		    		height: 160,
		    		width: 180,
		    		pagesize:18,
		    		Page: 1,
		    		cityId: 53,
		    		permanentcityid:"",
		    		lon: 0,
		    		lat: 0,
		    		environment:2,
		    		os: 0,
		    		MermberId: "",
		    		SortOrderType:2901001,
		    		IsNeedShurtTour:1
			})
			.then(function (response) {
				//与源数据不对口
				const data = response.data.data.SceneryList;
					$this.dataList = data;
			})
			.catch(function (error) {
			    console.log(error);
			});
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.position {
		width: 100%;
		background: white;
		.hotel-title {
			width: 100%;
			height: 0.4rem;
			text-align: center;
			background:#F2F4F7;
			span {
				line-height: 0.4rem;
			}
			span::after {
				content: "";
				display: inline-block;
				position: relative;
				top: -0.05rem;
				width: 0.55rem;
				height: 0.01rem;
				background: #e4e4e4;
				margin-left: 0.15rem;
			}
			span::before {
				position: relative;
				top: -0.05rem;
				display: inline-block;
				content: "";
				width: 0.55rem;
				height: 0.01rem;
				background: #e4e4e4;
				margin-right: 0.15rem;
			}
		}
		.list {
			width: 100%;
			ul {
				width: 100%;
				padding: 0 0.1rem;
				overflow: hidden;
				li {
					width: 3rem;
					height: 0.85rem;
					margin-top: 0.1rem;
					/*加底部边框*/
					a::after {
						content: " ";
						position: absolute;
						left: 100px;
						bottom: 0;
						right: -10px;
						height: 1px;
						border-bottom: 1px solid #e4e4e4;
						color: #e4e4e4;
						transform-origin: 0 100%;
						transform: scaleY(.5);
					}
					a {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 3rem;
						height: 0.85rem;
						position: relative;
						.list-left {
							width: 0.9rem;
							height: 0.8rem;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.list-right {
							width: 2rem;
							height: 0.85rem;
							h2 {
								width: 100%;
								height: 0.23rem;
								color: #333;
								font-size: 0.16rem;
								font-weight: 400;
								line-height: 0.23rem;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
							.list-money {
								width: 100%;
								height: 0.16rem;
								display: flex;
								flex-direction: row;
								.detail {
									color: #999;
									/*width: 0.85rem;*/
									width: 0.95rem;
									height: 0.16rem;
									line-height: 0.16rem;
									/*display: inline-block;*/
									display:flex;
									flex-direction:row;
									.list-price {}
									.yj {
										font-size: 0.08rem;
										color: #ff4614;
										font-family: Arial;
									}
									.money {
										font-size: 0.16rem;
										color: #ff4614;
										font-family: Arial;
									}
								}
								i {
									display: inline-block;
									width: 0.44rem;
									height: 0.13rem;
									background: url(../../assets/images/yimages/list-bg.png) no-repeat;
									background-size: 44px auto;
								}
								.museums {
									/*width: 0.64rem;*/
									width: 0.54rem;
									height: 0.13rem;
									display: inline-block;
									text-align: right;
									span {
										margin-left: 0.05rem;
										padding: 3px 4px 0;
										border: 1px solid #61aefd;
										font-size: 0.1rem;
										color: #61aefd;
										margin-bottom: 0.05rem;
									}
								}
							}
							.list-count {
								width: 100%;
								height: 0.12rem;
								margin-top: 0.05rem;
								.list-count-wrap {
									width: 100%;
									height: 0.12rem;
									line-height: 0.12rem;
									.dp-count {
										color: #777;
										margin-right: 0.05rem;
									}
									.my-count {
										color: #23beae;
									}
									.my-text {
										color: #777;
									}
								}
							}
							.list-desc {
								width: 2rem;
								height: 0.21rem;
								margin-top: 0.03rem;
								display: flex;
								justify-content: space-between;
								.introduce {
									display: inline-block;
									color: #777;
									width: 1.5rem;
									height: 0.21rem;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}
								.distance{
									line-height: 0.21rem;
									display: inline-block;
									width: 0.6rem;
									height: 0.21rem;
								}
							}
						}
					}
				}
			}
		}
		.hot-bottom {
			width: 100%;
			height: 0.61rem;
			padding: 0.1rem 0 0.15rem 0;
			text-align: center;
			display: flex;
			justify-content: center;
			a {
				display: block;
				width: 1.4rem;
				height: 0.34rem;
				border: 1px solid #F2F4F7;
				text-align: center;
				line-height: 0.34rem;
				color: black;
			}
		}
	}
</style>