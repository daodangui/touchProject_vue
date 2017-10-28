<template>
	<div class="bottom">
		<div class="left" @click="consult()">
			<i class="yo-ico">&#xe662;</i>
			<span>
					收藏
				</span>
		</div>

		<div class="right" @click="show()">
			<i class="yo-ico">&#xe61a;</i>
			<span>
					客服
				</span>
		</div>

		<div class="consult" v-show="isshow">
			<div class="first">
				<h3>产品编号：63594</h3>
				<p>为了更好的为您服务，请告知客服产品编号</p>
			</div>

			<div class="second">
				<div class="phone">
					<img src="../../assets/images/yimages/phone.png" />
				</div>

				<div class="service">
					<h3>客服电话</h3>
					<p>
						接通后→转<span>2</span>（预订咨询）→转<span>4</span>（周边游预订）→转<span>2</span>（酒+景套餐预订）
					</p>
				</div>
			</div>
			
			<div class="second third">
				<div class="phone">
					<img src="../../assets/images/yimages/people.png" />
				</div>
				
				<div class="service">
					<h3>在线客服</h3>
					<p>
						及时高效快速解决您的问题
					</p>
				</div>
			</div>
		</div>

		<div class="back" v-show="isshow" @click="hide()">

		</div>
	</div>
</template>

<script>
	import Mint from 'mint-ui';
	export default {
		data() {
			return {
				isshow: false
			}
		},
		methods: {
			consult() {
				Mint.MessageBox({
					title: "温馨提示",
					message: "添加收藏成功"
				});
				
//				console.log(this.$store.state.a.list);
				var obj = this.$store.state.a.list
				
				this.$store.commit("addshowlist",obj);
				console.log(this.$store.state.b.showlist)
			},
			show() {
				this.isshow=!this.isshow;
			},
			hide() {
				this.isshow=!this.isshow;
			}

		},
		created() {
			document.documentElement.style.fontSize = '31.25vw';
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped="scoped">
	.bottom {
		width: 100%;
		height: 0.5rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		text-align: center;
		z-index: 9;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #dcdcdc;
		background: #f3f4f8;
		>div {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 0.16rem;
			align-items: center;
			i {
				font-size: 0.18rem;
			}
		}
		.left {
			border-right: 1px solid #dcdcdc;
		}
		.consult {
			width: 2.68rem;
			height: 2.45rem;
			background: white;
			position: fixed;
			top: 30%;
			left: 50%;
			margin-left: -42%;
			z-index: 301;
			>div {
				width: 2.68rem;
				border-bottom: 1px solid #dcdcdc;
				padding: 0.15rem 0;
			}
			.first {
				height: 0.76rem;
				background: #e7e7e7;
				text-align: center;
				h3 {
					color: #ff6633;
					font-size: 0.13rem;
				}
				p {
					font-size: 0.12rem;
					line-height: 0.3rem;
				}
			}
			.second {
				padding-right: 0.05rem;
				height: 0.94rem;
				display: flex;
				flex-direction: row;
				.phone {
					width: 0.53rem;
					height: 0.6rem;
					img {
						width: 0.37rem;
					}
				}
				.service {
					flex: 1;
					h3{
						text-align: left;
						font-size: 0.18rem;
						font-weight: 900;
					}
					p {
						color: #999;
						font-size:0.13rem;
						span {
							color: #ff6633
						}
					}
				}
			}
			.third{
				border: none;
				height: 0.75rem;
				p{
					text-align: left;
				}
			}
		}
		.back {
			width: 100%;
			height: 100%;
			background: #333333;
			position: fixed;
			opacity: 0.6;
			top: 0;
			z-index: 300;
		}
	}
</style>