<template>
	<div class="register">
		<header class="regheader">
			<cpt-head />
		</header>
		<section class="regcontent">
			<mt-field  placeholder="请输入手机号码" v-model="username"></mt-field>
			<mt-field  placeholder="请输入密码" type="emil" v-model="password"></mt-field>
			<mt-button class="submit" type="danger">提交注册信息</mt-button>
		</section>
		<footer>
			<cpt-foot></cpt-foot>
		</footer>
	</div>
</template>

<script>
import foot from '../components/member/memberfoot.vue'
import cptHead from '@/components/scenery/yheader.vue';
import axios from 'axios';

export default {
	data(){
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		doregister(){
			
		}
	},
	components: {
		'cpt-foot': foot,
		'cpt-head': cptHead
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw'
	}
}
</script>

<style lang="scss" scoped>

.register{
	width: 100%;
	height: 100%;
	background: #edf0f5;
	.regheader{
		height: .44rem;
		background: #fff;
	}
	.regcontent{
		padding-top: .1rem;
		padding: .12rem .15rem;
		background: #fff;
		padding-bottom: .25rem;
		text-align: center;
		.submit{
			width: 80%;
			height: .35rem;
			font-size: .14rem;
			margin-top: .1rem;
		}
	}
}
footer{
	position: absolute;
	width: 100%;
	bottom: .2rem;
}
</style>