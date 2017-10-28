<template>
	<div class="loginPage">
		<div class="loginContent">
			<header>
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">普通登录</mt-tab-item>
				  <mt-tab-item id="2">手机快捷登录</mt-tab-item>
				</mt-navbar>
			</header>
			<section>
				<mt-tab-container v-model="selected">
				  <mt-tab-container-item id="1">
					   	<mt-field placeholder="请输入手机号码或邮箱" v-model="username"></mt-field>
						<mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>

						<mt-button type="danger" class="loginBtn">登录</mt-button>
						<p><a href="javascript:void(0)">忘记密码？</a><a href="javascript:void(0)" @click="toRegister">注册</a></p>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    	<mt-field placeholder="请输入手机号码" v-model="phone"></mt-field>
						<mt-field placeholder="请输入手机验证码" type="number" v-model="number"></mt-field>

						<mt-button type="danger" class="loginBtn">登录</mt-button>
						<p><a href="javascript:void(0)" @click="toRegister">注册</a></p>
				  </mt-tab-container-item>
				</mt-tab-container>
			</section>
		</div>
		<footer>
			
		</footer>
	</div>
</template>

<script>
	
export default{
	data(){
		return {
			selected: '1',   //必须是字符串形式
			username: '',
			password: '',
			phone: '',
			number: ''
		}
	},
	methods: {
		toRegister(){
			this.$router.push('/register');
		}
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw'
	}
}
</script>

<style lang="scss">

.loginPage{
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	background-color: #edf0f5;
	.loginContent{
		padding: 0rem .3rem;
		background-color: #fff;
		.mint-tab-item-label{
			font-size: .14rem;
		}
	}
	section{
		padding-bottom: .2rem;
		margin-top: .1rem;
		text-align: center;
		.loginBtn{
			color: #fff;
			width: 100%;
			margin: .05rem 0rem;
		}
		p{
			font-size: .12rem;
			a{
				color: #0099FF;
				&:first-child{
					float: left;
				}
				&:last-child{
					float: right;
				}
			}
		}
	}
}
</style>