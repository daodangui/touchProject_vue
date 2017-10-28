<template lang="html">
	<div id="headContent">
		<div class="show">
			<a @click="backTo()" href="javascript:void(0)" class="page-back"></a>
			<h2>{{this.$store.state.headTitle.titles[this.$store.state.headTitle.titles.length-1].title}}</h2>
			<a class="header-menu" @click="show()">
				<i class="yo-ico">&#xe634;</i>
			</a>
		</div>

		<div class="hide" v-if="isShow">
			<a class="home">
				<i></i>
				<span>首页</span>
			</a>

			<a class="home">
				<i></i>
				<span>我的同程</span>
			</a>

			<a class="home">
				<i></i>
				<span>登录/注册</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				isShow:false
			}
		},
		methods:{
			show(){
				this.isShow=!this.isShow;
			},
			backTo(){
				this.$store.commit('popTitle');
				this.$router.push(this.$store.state.headTitle.titles[this.$store.state.headTitle.titles.length-1].route);
			}
		},
		mounted() {
//			console.log(this.$store.state.a.list);
//			console.log(this.$store.state.hhh)
//			this.$store.commit("addlist");
//			console.log(this.$store.state.a.list);
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import "../../style/yo/lib/core/merge-extra";
	@import "../../style/yo/lib/core/merge-config";
	@import "../../style/yo/lib/core/function";
	@import "../../style/yo/lib/core/classes";
	
	#headContent {
		width: 100%;
		position: relative;
		.show {
			width: 100%;
			height: 0.44rem;
			background-color: #fff;
			overflow: hidden;
			display: flex;
			flex-direction: row;
			h2 {
				display: inline-block;
				line-height: 0.44rem;
				font-size: 0.18rem;
				text-align: center;
				font-weight: 400;
				font-weight: bold;
				margin: 0 auto;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.page-back {
				display: inline-block;
				height: 0.44rem;
				width: 0.44rem;
				&:before {
					content: '';
					display: block;
					width: 0.18rem;
					height: 0.15rem;
					margin: 0.16rem 0 0 0.15rem;
					background: url(../../assets/images/yimages/page-back.png) no-repeat;
					background-size: contain;
				}
			}
			.header-menu {
				display: inline-block;
				height: 0.44rem;
				width: 0.44rem;
				line-height: 0.44rem;
				i {
					font-size: 0.26rem;
				}
			}
		}
		.hide {
			width: 1.32rem;
			height: 1.46rem;
			position: absolute;
			right: 0.05rem;
			border-radius: 5px;
			background: #434950;
			font-size: 18px;
			top: 0.53rem;
			z-index: 999;
			a {
				display: inline-block;
				width: 1.32rem;
				height: 0.47rem;
				padding-top: 0.06rem;
				line-height: 0.44rem;
				i {
					display: inline-block;
					width: 20px;
					height: 20px;
					float: left;
					margin: 12px 6px 0 12px;
					background: url(../../assets/images/yimages/sprite.png) scroll no-repeat 0 0 transparent;
					background-size: 20px 80px;
				}
				span {
					color: white;
				}
			}
			a:nth-child(2) i {
				background-position: 0 -18px;
			}
			a:nth-child(3) i {
				background-position: -1px -38px;
			}
		}
		.hide::before {
			content: "";
			position: absolute;
			top: -9px;
			right: 8px;
			height: 0;
			border-style: solid;
			border-color: #434950 transparent;
			border-width: 0 9px 9px;
		}
	}
</style>