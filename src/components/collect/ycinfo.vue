<template>
	<div class="collect" v-if="data">
		<div class="word">
			<!--<h6>北京北大博雅国际酒店/北京天伦王朝酒店/北京京滨饭店等+北京故宫/颐和园</h6>-->
			<h6>{{data.Name}}</h6>
			
			<label>
      		   	<span>¥<strong>{{data.Pirce}}</strong></span>
       		  	起/份
        	    <div class="explain">起价说明</div>
       		 </label>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data : null
			}
		},
		methods:{
		},
		mounted() {
			this.data = this.$store.state.a.list[0];
//			this.$store.commit("addlist");
//			console.log(this.$store.state.a.list);
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.collect {
		width: 100%;
		height: 1rem;
		margin-bottom: 0.1rem;
		.word {
			width: 100%;
			height: 100%;
			padding: .09rem .14rem .06rem;
			background: #fff;
			border-bottom: 1px solid #e4e4e4;
			h6 {
				font-size: .16rem;
				color: #333;
				font-weight: 500;
				overflow: hidden;
				height: 0.48rem;
			}
			label {
				display: flex;
				flex-direction: row;
				width: 1.8rem;
				align-items: center;
				color: #b5b5b5;
				span {
					color: #f63;
					strong {
						font-size: .24rem;
						font-weight: 400;
						padding: 0 2px;
						align-self: center;
					}
				}
				>div {
					display: inline-block;
					background: url(../../assets/images/yimages/explain.png) no-repeat 100%;
					padding-right: .15rem;
					margin-left: .15rem;
					font-size: .1rem;
					color: #999;
					background-size: .12rem .12rem;
				}
			}
		}
	}
</style>