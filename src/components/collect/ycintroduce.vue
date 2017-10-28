<template>
	<div class="introduce"  v-if="data">
		<div class="choose">
			<div class="content">
				<h6>自选酒店<em class="hui-icon">惠</em></h6>
				<div class="free">
					<!--<span class="hotel">北京龙脉温泉度假村</span>-->
					<span class="hotel">{{data.Name}}</span>
					
					<span class="group">自由组合</span>
				</div>
			</div>

		</div>
		<div class="book">
			<div class="book-content">
				<h6>标准双床亲子套餐</h6>
				<p>标准双床间</p>
				<div class="price">
					<i>¥<span>{{data.Pirce}}</span></i>起/份
				</div>

				<div class="discount">
					<span class="left">积分抵扣 抵20元起/份</span>
					<span class="right">预订</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data : null
			}
		},
		methods:{
		},
		mounted() {
			this.data = this.$store.state.a.list[0];
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.introduce {
		width: 100%;
		height: 2.6rem;
		margin-bottom: 0.1rem;
		.choose {
			width: 100%;
			height: 0.93rem;
			border-bottom: 1px solid #dcdcdc;
			border-top: 1px solid #dcdcdc;
			margin-bottom: 0.1rem;
			background: white;
			.content {
				width: 100%;
				height: 0.9rem;
				padding: .13rem .15rem .14rem;
				h6 {
					padding-left: .3rem;
					margin-bottom: .1rem;
					background: url(../../assets/images/yimages/package-icon-choice.png) 0 no-repeat;
					background-size: .19rem;
					em {
						background: url(../../assets/images/yimages/hui-icon.png) 50% no-repeat;
						background-size: 100% 100%;
						width: .16rem;
						height: .14rem;
						line-height: .14rem;
						font-size: .1rem;
						vertical-align: middle;
						display: inline-block;
						text-align: center;
						text-indent: .025rem;
						position: relative;
						top: -.1rem;
						right: -.03rem;
					}
				}
				.free {
					height: 0.3rem;
					width: 100%;
					display: flex;
					flex-direction: row;
					margin-top: 0.2rem;
					justify-content: space-between;
					.hotel {
						background: url(../../assets/images/yimages/package-icon-hotel.png) 0 .04rem no-repeat;
						padding-left: 0.3rem;
						background-size: .15rem;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						width: 2.2rem;
					}
					.group {
						display: inline-block;
						font-size: .14rem;
						color: #fff;
						padding: .05rem .05rem;
						background: #ff6815;
						border-radius: 6px;
					}
				}
			}
		}
		.book {
			width: 100%;
			height: 1.6rem;
			border-bottom: 1px solid #dcdcdc;
			border-top: 1px solid #dcdcdc;
			background: white;
			.book-content {
				width: 100%;
				height: 1.58rem;
				padding: .13rem .15rem .14rem;
				position:relative;
				h6,
				p {
					width: 2.91rem;
					color: #333;
					margin-bottom: 0.15rem;
				}
				h6 {
					height: 0.24rem;
					font-size: 0.16rem;
				}
				p {
					height: 0.21rem;
					font-size: 0.14rem;
				}
				.price {
					width: 2.91rem;
					height: 0.3rem;
					color: #999;
					line-height: 0.3rem;
					i {
						color: #f63;
						span {
							font-size: .2rem;
							padding: 0 2px;
						}
					}
				}
				.discount {
					margin-top: 0.07rem;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.right {
						display: inline-block;
						position: relative;
						top: -0.1rem;
						font-size: .14rem;
						color: #fff;
						padding: .05rem .14rem;
						background: #ff6815;
						border-radius: 6px;
					}
				}
			}
			.book-content::after {
				content: "\25BC";
				display: block;
				width: .45rem;
				height: .09rem;
				line-height: .1rem;
				background: #e9edf0;
				color: white;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				font-size: .08rem;
				text-align: center;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
			}
		}
	}
</style>