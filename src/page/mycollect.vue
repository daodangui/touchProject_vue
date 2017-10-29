<template>
	<div class="mycollect" :class="ani">
		<header class="mycolheader">
			<cpt-head />
		</header>
		<section class="mycolcontent">
			<mt-cell-swipe v-for="(item, index) in items" class="iteminfo"
			  :key="item.id"
			  :title="item.title"
			  :label="item.label.join(' ')"
			  :value="item.id"
			  :right="[
				{
					content: '预订',
					style: {
						background: '#5bc0de',
						width: '.7rem',
						textAlign: 'center',
						color: '#fff'
					}
				},
			    {
			      content: '删除',
			      style: { 
						background: '#d9534f',
						width: '.7rem',
						textAlign: 'center',
						color: '#fff'
			      },
			      handler(){
			      	delitem(index)
			      }
			    }
			]"> 
				<slot>
					<span class="price"><span>￥</span><span>{{item.price}}</span><span>起</span></span>
				</slot>
			 </mt-cell-swipe>
		</section>
	</div>
</template>

<script>
import cptHead from '@/components/scenery/yheader.vue';

export default {
	data(){
		return {
			ani: {
				'ani': true,
				'elastic-in-right': true
			},
			items: []
		}
	},
	methods: {
		delitem(index){
			var $this = this;
			this.$messagebox('移除该条收藏').then(function(){
				$this.items.splice(index, 1)
				$this.$store.state.b.showlist.splice(index, 1)
			});
		}
	},
	components: {
		'cpt-head': cptHead
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw'
	},
	mounted(){
		var $this = this;
		this.$store.state.b.showlist.forEach(function(value){
			var item = {
				title: value.Name,
				label: value.Tag.map(function(value){
					return value.Name;
				}),
				price: value.Pirce
			}
			$this.items.push(item);
		})
		console.log($this.items);
	}
}
</script>

<style lang="scss">
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";
	
.mycollect{
	position: absolute;
	z-index: 1000;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	background: #edf0f5;
	.mycolheader{
		height: .44rem;
		background: #fff;
	}
	.mycolcontent{
		padding-top: .15rem;
		.mint-cell-label{
			display: inline-block;
			@include wrap(false);
			@include ellipsis(2.2rem, 1);
		}
		.mint-cell-text{
			display: inline-block;
			@include wrap(false);
			@include ellipsis(2.2rem, 1);
		}
		.price{
			span:first-child{
				color: #ff6815;
				font-size: .1rem;
			}
			span:nth-child(2){
				color: #ff6815;
				font-size: .2rem;
			}
			span:last-child{
				color: #999;
				font-size: .1rem;
			}
		}
		.iteminfo{
			margin-bottom: .1rem;
		}
	}
}
</style>