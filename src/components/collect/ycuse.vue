<template>
	<div class="use" v-if="data">
		<h6> 使用说明</h6>
		<div class="step">
			<p>{{data.Name}}</p>
			<p>开园时间：10:00-21:00</p>
			<p>必要证件：无</p>
		</div>
		
		<ul>
			<li>
				<div>
					<img src="../../assets/images/yimages/help-1.png"/>
				</div>
				<span>优惠信息</span>
			</li>
			
			<li>
				<div>
					<img src="../../assets/images/yimages/help-2.png"/>
				</div>
				<span>友情提示</span>
			</li>
			<li>
				<div>
					<img src="../../assets/images/yimages/help-3.png"/>
				</div>
				<span>发票事宜</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data : null
			}
		},
		mounted() {
			this.data = this.$store.state.a.list[0];
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.use {
		width: 100%;
		height: 2.08rem;
		padding: 0.12rem 0.14rem;
		background: #fff;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
		h6 {
			padding-left: .3rem;
			font-size: .16rem;
			line-height: .21rem;
			background: url(../../assets/images/yimages/icon-help.png) 0 no-repeat;
			background-size: .18rem .16rem;
		}
		.step{
			width: 2.91rem;
			height: 0.95rem;
			padding: 0.06rem 0 0.2rem 0;
			display: flex;
			flex-direction: column;
			p{
				line-height: 0.25rem;
				width: 100%;
				height: 0.25rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		ul{
			width: 2.91rem;
			height: 0.65rem;
			display: flex;
			flex-direction: row;
			li{
				flex: 1;
				padding-right: 0.24rem;
				display: flex;
				flex-direction: column;
				text-align: center;
				color: #09bb07;
				div{
					margin: 0 auto;
					width: 0.43rem;
					height: 0.43rem;
					border-radius: 50%;
					border: 1px solid #09bb07;
					display: flex;
					justify-content: center;
					align-items: center;
					img{
						width: 0.23rem;
						height: 0.23rem;
					}
				}
			}
		}
	}
</style>