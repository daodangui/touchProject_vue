<template>
	<nav class="nav">
		<div class="menubox1">
			<div class="menubar">
				<a href="javascript:void(0)">
					<i class="yo-ico">&#xe603;</i>
					<span>全部订单</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
		</div>
		<div class="menubox2">
			<div class="menubar">
				<a href="javascript:void(0)">
					<i class="yo-ico">&#xe659;</i>
					<span>奖金</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
			<div class="menubar">
				<a href="javascript:void(0)">
					<i class="yo-ico">&#xe638;</i>
					<span>立返</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
			<div class="menubar">
				<a href="javascript:void(0)">
					<i class="yo-ico">&#xe677;</i>
					<span>红包</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
		</div>
		<div class="menubox3">
			<div class="menubar">
				<a href="javascript:void(0)">
					<i class="yo-ico">&#xe625;</i>
					<span>常用信息</span>
					<span class="remark">常用旅客、邮寄地址</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
			<div class="menubar">
				<a @click="toCollect()" href="javascript:void(0)" >
					<i class="yo-ico">&#xe68b;</i>
					<span>我的收藏</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
			<div @click="toCSpage()" class="menubar">
				<a href="javascript:void(0)">
					<i class="yo-ico">&#xe629;</i>
					<span>在线客服</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
		</div>
	</nav>
</template>

<script>

export default {
	data(){
		return {

		}
	},
	methods: {
		toCollect(){
			if(this.$store.state.user.login){
				this.$router.push('/collect')
				this.$store.commit('pushTitle', {
					title: '我的收藏',
					route: '/collect'
				})
			}else{
				this.$router.push('/login')
			}
		},
		toCSpage(){
			this.$router.push('/CSpage')
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../style/yo/lib/core/merge-extra";
@import "../../style/yo/lib/core/merge-config";
@import "../../style/yo/lib/core/function";
@import "../../style/yo/lib/core/classes";

.nav{
	height: 3.372rem;
	.menubox1{
		margin-bottom: .1rem;
	}
	.menubox2{
		margin-bottom: .1rem;
	}
	.menubox2,.menubox3{
		.menubar:not(:last-child){
			border-bottom: .01rem solid #eee;
		}
	}
	.menubar{
		height: .426rem;
		background: #fff;
		.remark{
			font-size: .11rem;
			color: #999;
			margin-left: .7rem;
		}
		a{
			display: inline-block;
			width: 100%;
			height: 100%;
			line-height: .426rem;
			i:first-child{
				color: #999;
				font-size: .18rem;
				vertical-align: top;
				margin-left: .13rem;
			}
			i:last-child{
				color: #ccc;
				font-weight: bold;
				float: right;
				margin-right: .1rem;
			}
			span{
				font-size: .16rem;
				color: #333;
				margin-left: .1rem;
			}
		}
	}
	
}
</style>