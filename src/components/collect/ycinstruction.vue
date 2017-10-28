<template>
	<div class="instruction">
		<div class="hotel" v-for="(list,i) in datalist" :key="i">
			<div class="hotel-content">
				<h6>
					<img :src="list.pic" alt="" />
					<span>{{list.title}}</span>
				</h6>
				<div class="hotel-bottom">
					<div class="left">
					<img :src="list.Img" alt="" />
					</div>
					<div class="right">
						<p>{{list.Comment}}</p>
						<p v-show="i==1" class="hide"> 
							开园时间：10:00-21:00
						</p>
						<div class="plane">
							{{list.position}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				datalist:[
					{
						"pic":"//img1.40017.cn/cn/sl/touch/detail/icon-hotel.png",
						"title":"酒店介绍",
						"Img": "//pic5.40017.cn/02/000/36/d6/rBLkCFmw4xOAVyz0AAKX_dNhzbA956_150x150_02.jpg",
						"Comment": "北京南宫温泉度假酒店",
						"position":"北京市丰台区王佐镇福宫路39号，王佐路口"
					},
					{
						"pic":"//img1.40017.cn/cn/sl/touch/detail/icon-hotel.png",
						"title":"景点介绍",
						"Img": "//pic4.40017.cn/zzy/rimage/2016/04/20/17/llZd7v_150x150_02.jpg.webp",
						"Comment": "南宫温泉",
						"position":"北京市丰台区王佐镇福宫路39号"
					}
				]
			}
		},
		methods: {

		},
		created(){
			document.documentElement.style.fontSize = '31.25vw';
		},
		mounted() {

		}
	}
	
</script>

<style lang="scss" scoped="scoped">
	.instruction {
		width: 100%;
		height: 2.91rem;
		margin-bottom: .1rem;
		border-bottom: 1px solid #dcdcdc;
		background: white;
		.hotel {
			width: 100%;
			height: 1.45rem;
			.hotel-content {
				width: 100%;
				height: 100%;
				padding: .13rem .14rem;
				h6 {
					font-size: .16rem;
					line-height: .21rem;
					img{
						width: 0.15rem;
						height: 0.15rem;
					}
					span{
						padding-left: 0.2rem;
					}
				}
				.hotel-bottom {
					width: 2.91rem;
					height: 0.84rem;
					margin-top: 0.15rem;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					.left {
						width: 0.84rem;
						height: 0.84rem;
						img {
							width: 0.84rem;
							height: 0.84rem;
						}
					}
					.right {
						flex: 1;
						padding-left: 0.1rem;
						position: relative;
						.hide{
							position: absolute;
							top: 0.3rem;
							font-size: 0.13rem;
						}
						p {
							color: #333;
							font-size: 0.15rem;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						div {
							margin-top: 0.43rem;
							font-size: .12rem;
							color: #999;
							background: #f7f8fa;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							width: 2.1rem;
							position: relative;
							padding-right: 0.2rem;
						}
						div::after {
							content: "";
							width: .14rem;
							height: .14rem;
							background: url(../../assets/images/yimages/local.png) 0 0 no-repeat;
							position: absolute;
							right: .04rem;
							top: 0;
							bottom: 0;
							margin: auto;
							background-size: contain;
						}
					}
				}
			}
		}
	}
</style>