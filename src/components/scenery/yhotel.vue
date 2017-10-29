<template>
	<div class="hotel">
		<div class="hotel-title" id="b">
			<span>精选酒景套餐</span>
		</div>

		<ul class="hotel-list">
			<li v-for="(list,i) in dataList" :key="i" @click="gotocollect(list)">
				<a href="javascript:void(0)">
					<div class="hotel-left">
						<img :src="list.PictureUrl" alt="" />
					</div>

					<div class="hotel-right">
						<h2>{{list.Name}}</h2>

						<div class="hotel-money">
							<p>
								<span class="yj">¥</span>
								<span class="money">{{list.Pirce}}</span>
								<span class="qi">起</span>
							</p>
						</div>

						<p class="hotel-tag">
							<span>快乐童心</span>
						</p>

						<div class="hotel-count">
							<p class="hotel-count-wrap">
								<span class="dp-count">{{list.CommentCount}}条点评</span> &nbsp;&nbsp;
								<span class="dp-count">{{list.Satisfaction}}%满意</span>
							</p>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				dataList: []
			}
		},
		methods: {
			gotocollect(list) {
//				this.$router.push({
//					name: 'ycollect',
//					params: {
//						list: list
//					}
//				});
				this.$store.commit("addlist",list);
				this.$store.commit('pushTitle', {
					title: '线路详情',
					route: '/ycollect'
				});
				this.$router.push("/ycollect");
//				console.log(this.$store.state.a.list);
			},
		},
		mounted() {
			var $this = this;
			axios.post('/bip/gateway/scenery.resource/v1/resource/selftrecommend/recommend/?Labrador-Token=0a905013-886c-48d7-936f-c08226227398', {
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
				const data = response.data.data.LineList;
				$this.dataList = data;
			})
			.catch(function (error) {
			    console.log(error);
			});
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.hotel {
		width: 100%;
		.hotel-title {
			width: 100%;
			height: 0.4rem;
			text-align: center;
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
		.hotel-list {
			width: 100%;
			padding: 0 0.1rem;
			background: white;
			overflow: hidden;
			li {
				width: 3rem;
				height: 1rem;
				margin-top: 0.1rem;
				padding-bottom: 0.1rem;
				a {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					width: 3rem;
					height: 0.9rem;
					.hotel-left {
						width: 0.9rem;
						height: 0.8rem;
						background: yellow;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.hotel-right {
						width: 2rem;
						height: 0.9rem;
						/*background: chocolate;*/
						h2 {
							width: 2rem;
							height: 0.32rem;
							font-size: 14px;
							word-break: break-all;
							text-overflow: ellipsis;
							overflow: hidden;
							font-weight: 400;
							line-height: 1.2;
							color: #333;
						}
						.hotel-money {
							width: 2rem;
							height: 0.2rem;
							p {
								line-height: 0.2rem;
								height: 0.2rem;
								.yj {
									font-size: 12px;
									color: #ff4614;
									font-family: Arial;
								}
								.money {
									color: #ff4614;
									font-family: Arial;
									font-size: 20px;
								}
								.qi {
									color: #777;
									font-size: 12px;
								}
							}
						}
						.hotel-tag {
							width: 2rem;
							height: 0.18rem;
							margin-top: 0.03rem;
							span {
								height: 0.17rem;
								padding: 0rem 0.04rem 0;
								display: inline-block;
								margin-right: 0.01rem;
								border: 1px solid #61aefd;
								font-size: 10px;
								border-radius: 1px;
								color: #61aefd;
								margin-bottom: 0.05rem;
							}
						}
						.hotel-count {
							width: 2rem;
							height: 0.12rem;
							margin-top: 0.05rem;
							.hotel-count-wrap {
								width: 2rem;
								height: 0.12rem;
								line-height: 0.12rem;
								color: #777;
							}
						}
					}
				}
			}
		}
	}
</style>