<template>
	<div class="register">
		<header class="regheader">
			
		</header>
		<section class="regcontent">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
		</section>
	</div>
</template>

<script>
	
</script>

<style lang="scss">

.register{
	width: 100%;
	height: 100%;
	background: #edf0f5;
	.regheader{
		height: .44rem;
		background: #fff;
	}
	.regcontent{
		height: 2.5rem;
		margin-top: .1rem;
		padding: .12rem .15rem;
		background: #fff;
		padding: 0rem .15rem;
	}
}
</style>