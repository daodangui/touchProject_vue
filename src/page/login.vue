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
					   	
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    
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
			selected: '1'   //必须是字符串形式
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
}
</style>