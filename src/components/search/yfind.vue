<template>
	<div class="search">
		<!--<div class="list">-->
		<div class="list" ref="wrapper">
			<mt-loadmore :bottom-method="loadBottom" :autoFill="false" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul v-if="datalist">
					<li v-for="(list,i) in datalist" :key="list.id">
						<a href="javascript:void(0)">
							<div class="list-left">
								<img :src="list.picture" alt="" />
								<b>景点</b>
							</div>
							<div class="list-right">
								<h2>{{list.productName}}</h2>
								<div class="list-money">
									<p class="detail">
										<span class="yj">¥</span>
										<span class="money">{{list.price/100}}</span>
										<span class="qi">起</span>
									</p>
								</div>
								<div class="list-count">
									<p class="list-count-wrap">
										<template v-if="list.lbList && list.lbList.label.length > 0">
											<span v-for="item in list.lbList.label" :key="item.id">{{item.name}}</span>
										</template>
									</p>
								</div>
								<div class="list-desc">
									<p>
										<span>{{list.commentCount}}条点评</span>&nbsp;
										<span>{{parseInt(list.commentRate)}}%满意</span>
									</p>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</mt-loadmore>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import Mint from 'mint-ui';
	var pageIndex = 1;
	export default {
		data() {
			return {
				datalist: null,
				allLoaded: false,
			}
		},
		props:['sortvalue'],
		watch: {
			sortvalue: function(newvalue){
				if(newvalue == '低高'){
					var bdata = [].concat(this.datalist);
					this.datalist = bdata.sort(function(a,b){
						return a.price - b.price;
					})
				}else if(newvalue == '高低'){
					var bdata = [].concat(this.datalist);
					this.datalist = bdata.sort(function(a,b){
						return b.price - a.price;
					})
				}
			}
		},
		mounted() {
			var $this = this;
			axios.get('/api/AjaxHelper/DestinationSearchHandler.ashx', {
					params: {
						dataType: "Product",
						destName: $this.$store.state.search.searchValue,
						PageSize: 10,
						PageIndex: 1
					}
				})
				.then(function(response) {
					const data = response.data.response.resultList.record;
					$this.datalist = data;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		methods: {
			loadBottom(){
				var $this = this;
				axios.get('/api/AjaxHelper/DestinationSearchHandler.ashx', {
					params: {
						dataType: "Product",
						destName: $this.$store.state.search.searchValue,
						PageSize: 10,
						PageIndex: ++pageIndex
					}
				})
				.then(function(response) {
					if(response.data.response.resultList){
						const data = response.data.response.resultList.record;
						$this.datalist = $this.datalist.concat(data);
					}else{
						$this.allLoaded = true;
						Mint.Toast('已经没有更多了');
					}
				})
				this.$refs.loadmore.onBottomLoaded();
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import "../../style/yo/lib/core/merge-extra";
	@import "../../style/yo/lib/core/merge-config";
	@import "../../style/yo/lib/core/function";
	@import "../../style/yo/lib/core/classes";
	@import "../../style/yo/lib/element/yo-loading.scss";
	.search {
		width: 100%;
		background: white;
		.list {
			width: 100%;
			ul {
				width: 100%;
				li {
					width: 100%;
					height: 0.99rem;
					padding: 0.07rem 0.1rem 0.08rem;
					border-top: 1px solid #e4e4e4;
					a {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 3rem;
						height: 0.83rem;
						position: relative;
						.list-left {
							width: 0.84rem;
							height: 0.8rem;
							img {
								width: 100%;
								height: 100%;
							}
							b {
								position: absolute;
								top: 0.06rem;
								left: 0.06rem;
								width: 0.28rem;
								height: 0.14rem;
								color: white;
								background: #333333;
								font-family: arial, sans-serif;
								font-size: 0.08rem;
								font-weight: 100;
								line-height: 0.14rem;
								text-align: center;
							}
						}
						.list-right {
							width: 2.05rem;
							height: 0.83rem;
							h2 {
								width: 100%;
								height: 0.18rem;
								color: #333;
								font-size: 0.14rem;
								font-weight: 400;
								line-height: 0.18rem;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
							.list-money {
								width: 100%;
								height: 0.2rem;
								margin-top: 0.03rem;
								.detail {
									color: #999;
									width: 0.95rem;
									height: 0.2rem;
									line-height: 0.2rem;
									display: inline-block;
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
							}
							.list-count {
								width: 100%;
								height: 0.16rem;
								font-size: 0.12rem;
								margin-top: 0.02rem;
								.list-count-wrap {
									width: 100%;
									height: 0.16rem;
									line-height: 0.16rem;
									span {
										border: 1px solid rgba(255, 132, 0, .5);
										color: #ff8400;
										font-weight: 400;
										margin-right: .05rem;
										display: inline-block;
										padding: 0 .02rem;
									}
								}
							}
							.list-desc {
								width: 2rem;
								height: 0.18rem;
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
	}
</style>