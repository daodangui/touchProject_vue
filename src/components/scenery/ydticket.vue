<template>
	<div class="ticket">
		<ul class="ticket-nav">
			<li class="active">
				<a href="">
					<h3>票价</h3>
				</a>
			</li>
			<li>
				<a href="">
					<h3>点评</h3>
				</a>
			</li>
			<li>
				<a href="">
					<h3>须知</h3>
				</a>
			</li>
		</ul>

		<div class="ticket-sort">
			<ul>

				<div class="circle" v-for="(list,g) in dataList" :key="g">

					<li class="ticket-adult" @click="showhide(g)">
						<img :src="list.Img" alt="" />
						<span class="adult">{{list.Comment}}</span>
						<em></em>
					</li>

					<template v-if="ticketlist">
					
					<div class="wrap" v-show="hide[g]==0">

						<div class="detail" v-for="(ticket,j) in ticketlist[g].ChannelPriceEntityList" :key="j">
							<div class="detail-wrap">
								<h4 class="h4">{{ticket.TicketName}}</h4>
								<div class="iconclass">
									<div class="left">
										<span>{{ticket.TicketTagEntityList[0].description}}</span>
										<span>条件退</span>
									</div>

									<div class="right">
										<i>￥</i>
										<span>{{ticket.Amount}}</span>
										<strike>￥{{ticket.Amount}}</strike>
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
					</div>
				</template>
				</div>

			</ul>
		</div>
	</div>
</template>

<script>
	
	import Vue from 'vue';
	
	import axios from 'axios'
	export default {
		data() {
			return {
				dataList: [
					{
						"Img": "//img1.40017.cn/cn/s/2016/touch/scenery/final/ticket_icon60301.png",
						"Comment": "成人票"
					},
					{
						"Img": "//img1.40017.cn/cn/s/2016/touch/scenery/final/ticket_icon60304.png",
						"Comment": "学生票"
					},
					{
						"Img": "//img1.40017.cn/cn/s/2016/touch/scenery/final/ticket_icon60303.png",
						"Comment": "老年票"
					},
					{
						"Img": "//img1.40017.cn/cn/s/2016/touch/scenery/final/ticket_icon60306.png",
						"Comment": "优待票"
					}
				],
				ticketlist: null,
				hide: [1,1,1,1],
				activeindex:-1
			}
		},

		mounted() {
			axios.get('/vip/ticket.php')
				.then((res) => {
					const data = res.data.SceneryPrices[0].ChannelPriceModelEntityList;
					this.ticketlist = data;
				})
		},
		methods: {
			showhide(k) {
				if(this.hide[k]==0){
					Vue.set(this.hide, k, 1);
				}else{
					Vue.set(this.hide, k, 0);
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import "../../style/yo/lib/core/merge-extra";
	@import "../../style/yo/lib/core/merge-config";
	@import "../../style/yo/lib/core/function";
	@import "../../style/yo/lib/core/classes";
	
	.ticket {
		width: 100%;
		background: white;
		.ticket-nav {
			margin-top: 0.1rem;
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
						font-weight: 100;
						font-size: 0.16rem;
						text-align: center;
						height: 0.36rem;
						line-height: 0.36rem;
					}
				}
			}
			li.active {
				color: #23beae;
				border-bottom: 3px solid #23beae;
			}
		}
		.ticket-sort {
			width: 100%;
			.circle {
				width: 100%;
				.ticket-adult {
					width: 100%;
					height: 0.45rem;
					border-bottom: 1px solid #dcdcdc;
					line-height: 0.44rem;
					padding-left: 0.2rem;
					img {
						width: 0.28rem;
						height: 0.21rem;
						position: relative;
						top: -0.03rem;
					}
					.adult {
						display: inline-block;
						width: 2.23rem;
						font-size: 0.16rem;
					}
					em {
						margin-left: 0.12rem;
						display: inline-block;
						width: 7px;
						height: 13px;
						background: url(../../assets/images/yimages/arrow_ico.png) no-repeat;
						background-size: 7px 13px;
					}
				}
			}
		}
	}
	
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
				.left {
					>span::before {
						content: '';
						display: inline-block;
						background-image: url(../../assets/images/yimages/labelicon.png);
						background-repeat: no-repeat;
						background-size: 11px 11px;
						height: 11px;
						width: 11px;
						margin-right: 5px;
						margin-bottom: 3px;
						vertical-align: middle;
					}
				}
				.right {
					span:nth-child(2) {
						font-size: 0.18rem;
						color: #ff8400;
					}
					i:nth-child(1) {
						font-size: 0.14rem;
						color: #ff8400;
					}
					i {
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