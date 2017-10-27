<template>
	<div class="mycollect" :class="ani">
		<header class="mycolheader">
			
		</header>
		<section class="mycolcontent">
			<mt-cell-swipe v-for="i in 6" class="iteminfo"
			  title="北京稻香湖景酒店"
			  label="【快乐童心】2大1小尽享亲子DIY2大1小尽享亲子DIY2大1小尽享亲子DIY2大1小尽享亲子DIY2大1小尽享亲子DIY"
			  :right="rightinfo" >
				<slot>
					<span class="price"><span>￥</span><span>399</span><span>起</span></span>
				</slot>
			  </mt-cell-swipe>
		</section>
	</div>
</template>

<script>
	
export default {
	data(){
		return {
			ani: {
				'ani': true,
				'elastic-in-right': true
			},
			rightinfo: [
				{
					content: '预订',
					style: {
						background: '#5bc0de',
						width: '.7rem',
						textAlign: 'center',
						color: '#fff'
					}
				},
			    {
			      content: '删除',
			      style: { 
						background: '#d9534f',
						width: '.7rem',
						textAlign: 'center',
						color: '#fff'
			      },
			      handler: () => this.$messagebox('delete')
			    }
			]
		}
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw'
	}
}
</script>

<style lang="scss">
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";
	
.mycollect{
	position: absolute;
	z-index: 1000;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	background: #edf0f5;
	.mycolheader{
		height: .44rem;
		background: #fff;
	}
	.mycolcontent{
		padding-top: .15rem;
		.mint-cell-label{
			display: inline-block;
			@include wrap(false);
			@include ellipsis(2.5rem, 1);
		}
		.price{
			span:first-child{
				color: #ff6815;
				font-size: .1rem;
			}
			span:nth-child(2){
				color: #ff6815;
				font-size: .2rem;
			}
			span:last-child{
				color: #999;
				font-size: .1rem;
			}
		}
		.iteminfo{
			margin-bottom: .1rem;
		}
	}
}
</style>