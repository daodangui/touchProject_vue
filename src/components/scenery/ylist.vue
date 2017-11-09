<template>
	<div class="position">
		<div class="wrap">
			<ul v-bind:class="{ guding: isActive }" id="a">
				<li :class="{ active :index=='a'}" @click="change('a')">
					<a href="javascript:void(0)">
						<h3 :class="{ hactive:index=='a'}">当季热门</h3>
					</a>
				</li>
				<li :class="{ active:index=='b'}" @click="change('b')">
					<a href="javascript:void(0)">
						<h3 :class="{ hactive:index=='b'}">酒景套餐</h3>
					</a>
				</li>
				<li :class="{active:index=='c'}" @click="change('c')">
					<a href="javascript:void(0)">
						<h3 :class="{ hactive:index=='c'}">周边景点</h3>
					</a>
				</li>
			</ul>
		</div>

		<div class="list">
			<ul v-if="dataList">
				<li v-for="(list,i) in dataList" :key="i" @click="gotoDetail(list)">
					<a href="javascript:void(0)">
						<div class="list-left">
							<!--<img :src="list.PictureUrl" alt="" />-->
							<img :src="'http://localhost:5000/upload/'+list.picture" alt="" />
						</div>

						<div class="list-right">
							<!--<h2>{{list.Name}} <span>(5A)</span></h2>-->
							<h2>{{list.sceneryName}} <span>(5A)</span></h2>
							
							<div class="list-money">
								<p class="detail">
									<span class="list-price">同程价</span>
									<span class="yj">¥</span>
									<!--<span class="money">{{list.Pirce}}</span>-->
									<span class="money">{{list.price}}</span>
									
									<span class="qi">起</span>
								</p>
								<i></i>
								<p class="museums">
									<span v-for="(item,i) in list.Tag">
										<!--{{list.Name}}-->
									</span>
								</p>
							</div>

							<div class="list-count">
								<p class="list-count-wrap">
									<span class="dp-count">{{list.commentcount}}条点评</span>&nbsp;&nbsp;
									<!--<span class="dp-count">{{list.CommentCount}}条点评</span>&nbsp;&nbsp;-->
									
									<!--<span class="my-count">{{list.Satisfaction}}%</span>-->
									
									<span class="my-text">满意</span>
								</p>
							</div>

							<div class="list-desc">
								<!--<p>{{list.Summary}}</p>-->
								
								<p>{{list.summary}}</p>
								
							</div>
						</div>
					</a>
				</li>
			</ul>

			<div class="yo-loading" v-if="!dataList">
				<i class="yo-ico"></i>
				<div class="text">加载中...</div>
			</div>
		</div>

		<div class="hot-bottom" @click="more()">
			<a href="javascript:void(0)">加载更多...</a>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	var cityId=53;
	export default {
		data() {
			return {
				dataList: null,
				index: "a",
				isfixed: false,
				topvalue: 0,
				isActive: false
			}
		},
		methods: {
			gotoDetail(positionId) {
				this.$router.push({
					name: 'details',
					params: {
						id: positionId
					}
				});
			},
			change(k) {
				this.index = k;
				var s = "#" + k;
				if(k == 'a') {
					document.body.scrollTop = 589; // chrome
					document.documentElement.scrollTop = 589;
				} else {
					var anchor = document.querySelector(s);
					document.body.scrollTop = anchor.offsetTop; // chrome
					document.documentElement.scrollTop = anchor.offsetTop; // firefox
					
				}
			},
			check() {
				var $this = this;
				window.addEventListener('scroll', function() {
					var a = document.body.scrollTop;
					if(a >= 589) {
						$this.isActive = true;
					} else {
						$this.isActive = false;
					}
				}, true)
			},
			checklist() {
				var $this = this;
				window.addEventListener('scroll', function() {
					var b = document.body.scrollTop;
					if(b >= 2305 && b < 4435) {
						$this.index = "b";
					} else if(b >= 4435) {
						$this.index = "c";
					} else {
						$this.index = "a";
					}
				}, true)
			},

			more() {
				var $this = this;
				axios.post('/bip/gateway/scenery.resource/v1/resource/scenerysrcommend/recommend/?Labrador-Token=0a905013-886c-48d7-936f-c08226227398', {
						totalcount: 10,
						height: 160,
						width: 180,
						pagesize: 18,
						Page: 2,
						cityId: ++cityId,
						permanentcityid: "",
						lon: 0,
						lat: 0,
						environment: 2,
						os: 0,
						MermberId: "",
						SortOrderType: 2901001,
						IsNeedShurtTour: 1
					})
					.then(function(response) {
						const data = response.data.data.SceneryList;
						$this.dataList = $this.dataList.concat(data);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		},
		mounted() {
			var $this = this;
//			axios.post('/bip/gateway/scenery.resource/v1/resource/scenerysrcommend/recommend/?Labrador-Token=0a905013-886c-48d7-936f-c08226227398', {
//					totalcount: 10,
//					height: 160,
//					width: 180,
//					pagesize: 18,
//					Page: 1,
//					cityId: 53,
//					permanentcityid: "",
//					lon: 0,
//					lat: 0,
//					environment: 2,
//					os: 0,
//					MermberId: "",
//					SortOrderType: 2901001,
//					IsNeedShurtTour: 1
//				})
//				.then(function(response) {
//					const data = response.data.data.SceneryList;
//					$this.dataList = data;
//				})
//				.catch(function(error) {
//					console.log(error);
//				});


			axios.get('/node/api/scenery/felist', {
				})
				.then(function(response) {
					const data = response.data.data;
					$this.dataList = data;
				})
				.catch(function(error) {
					console.log(error);
				});
			this.check();
			this.checklist();
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import "../../style/yo/lib/core/merge-extra";
	@import "../../style/yo/lib/core/merge-config";
	@import "../../style/yo/lib/core/function";
	@import "../../style/yo/lib/core/classes";
	@import "../../style/yo/lib/element/yo-loading.scss";
	.position {
		width: 100%;
		background: white;
		.wrap {
			width: 100%;
			height: 0.4rem;
			>ul.guding {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 999999;
				background: white;
			}
			>ul {
				width: 100%;
				height: 0.4rem;
				border-bottom: solid 1px #ddd;
				display: flex;
				flex-direction: row;
				li {
					flex: 1;
					height: 0.39rem;
					text-align: center;
					a {
						display: inline-block;
						width: 0.7rem;
						height: 0.36rem;
						h3 {
							color: #666666;
							width: 0.7rem;
							font-size: 0.16rem;
							text-align: center;
							height: 0.36rem;
							line-height: 0.36rem;
						}
						h3.hactive {
							color: #23beae;
						}
					}
				}
				li.active {
					border-bottom: 3px solid #23beae;
				}
			}
		}
		.list {
			width: 100%;
			ul {
				width: 100%;
				padding: 0 0.1rem;
				li {
					width: 3rem;
					height: 0.85rem;
					margin-top: 0.1rem;
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
									width: 0.95rem;
									height: 0.16rem;
									line-height: 0.16rem;
									display: flex;
									flex-direction: row;
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
									width: 0.54rem;
									height: 0.13rem;
									background: url(../../assets/images/yimages/list-bg.png) no-repeat;
									background-size: 44px auto;
								}
								.museums {
									margin-left: 0.08rem;
									width: 0.54rem;
									height: 0.18rem;
									display: inline-block;
									text-align: right;
									overflow: hidden;
									span {
										text-align: center;
										width: 0.5rem;
										margin-left: 0.05rem;
										padding: 0px 0px 0;
										border: 1px solid #61aefd;
										font-size: 0.08rem;
										color: #61aefd;
										height: 0.14rem;
										display: inline-block;
										line-height: 0.14rem;
										text-overflow: ellipsis;
										white-space: nowrap;
										overflow: hidden;
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
								p {
									color: #777;
									width: 2rem;
									height: 0.21rem;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
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