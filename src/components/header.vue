<template lang="html">
	<div id="headContent">
		<div class="headcontainer">
			<div class="headCity">
				<router-link tag="span" to="/cityList" href="">北京<i class="yo-ico">&#xe601;</i></router-link>
			</div>
			<div class="headSearch">
				<div>
					<i class="yo-ico">&#xe66e;</i>
				</div>
				<input type="text" placeholder="目的地/酒店/景点/关键字">
			</div>
			<router-link tag="div" to="/memberPage" class="headMy">
				<i class="yo-ico">&#xe602;</i>
			</router-link>
			<!-- <div class="headMy">
				<i class="yo-ico">&#xe602;</i>
			</div> -->
		</div>
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

<style lang="scss" scoped="scoped">
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

#headContent{
	width: 100%;
	height: .877rem;
	background-color: #fff;
	z-index: 100;
	top: 0px;
	position: absolute;
	top: 0px;
	box-shadow: .05rem 0rem .2rem #aaa;
	@include flexbox;
	@include align-items;
	@include justify-content;
	.headcontainer{
		width: 96%;
		height: 100%;
		color: #23beae;
		font-size: .28rem;
		@include flexbox;
		@include align-items;
	}
	.headCity{
		width: 1rem;
		i{
			font-size: .20rem;
			font-weight: bold;
			margin-left: .03rem;
			vertical-align: middle;
		}
	}
	.headSearch{
		@include  flex;
		height: .56rem;
		color: #93989f;
		@include border-radius(.56rem);
		background-color: #eaedf1;
		line-height: .56rem;
		@include flexbox;
		&>div{
			height: 100%;
			width: 1rem;
			text-align: right;
			display: inline-block;
			i{
				font-size: .22rem;
			}	
		}
		input{
			outline: none;
			border: 0px;
			@include flex;
			vertical-align: top;
			line-height: .56rem;
			font-size: .23rem;
			background-color: transparent;
			padding-left: .1rem;
			color: #93989f;
		}
	}
	.headMy{
		text-align: center;
		width: .60rem;
		font-size: .40rem;
		font-weight: bold;
	}
}
</style>