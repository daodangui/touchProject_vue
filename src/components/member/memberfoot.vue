<template>
	<div class="memberfoot">
		<ul>
			<li><a href="">客服电话</a></li>
			<li><a href="">下载客户端</a></li>
			<li><a href="">关于同程</a></li>
			<li><a href="">电脑版</a></li>
		</ul>
		<p>
			&copy;2017同程旅游
		</p>
	</div>
</template>

<script>

export default {
	data(){
		return {

		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../style/yo/lib/core/merge-extra";
@import "../../style/yo/lib/core/merge-config";
@import "../../style/yo/lib/core/function";
@import "../../style/yo/lib/core/classes";

.memberfoot{
	padding-top: .1rem;
	height: .654rem;
	ul{
		@include flexbox;
		@include justify-content(center);
		li{
			text-align: center;
			padding: 0rem .1rem;
			font-size: .12rem;
			a{
				color: #666;
			}
			&:not(:last-child){
				border-right: .01rem solid #ddd;
			}
		}
	}
	&>p{
		font-size: .12rem;
		color: #666;
		margin-top: .05rem;
		text-align: center;
	}
}
</style>