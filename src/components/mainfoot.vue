<template>
	<div class="mainfoot">
		<div>
			<div v-for="i in 4">
				<a href="">
					<p><i class="yo-ico" v-html="footIco[i-1]"></i></p>
					<p>{{fontLinkTitle[i-1]}}</p>
				</a>
			</div>
		</div>
		<div>
			<span>&copy;2017同程旅游</span>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {
			footIco: ['&#xe662;','&#xe613;','&#xe600;','&#xe61a;'],
			fontLinkTitle: ['客服电话','下载客户端','电脑版','我的同程']
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.mainfoot{
	height: 1.7166rem;
	background: #fff;
	margin-top: .3rem;
	@include flexbox;
	@include flex-flow(column wrap);
	&>div{
		@include flex;
		width: 100%;
	}
	&>div:first-child{
		@include flexbox;
		&>div{
			@include flex;
			&:not(:last-child){
				border-right: .01rem solid #ddd;
			}
			&>a{
				display: inline-block;
				width: 100%;
				height: 100%;
				text-align: center;
				color: #777;
				&>p:first-child{
					font-size: .35rem;
				}
				&>p:last-child{
					font-size: .2rem;
				}
			}
		}
	}
	&>div:last-child{
		border-top: .01rem solid #ddd;
		@include flexbox;
		@include justify-content;
		@include align-items;
		color: #999;
		font-size: .22rem;
	}
}
</style>