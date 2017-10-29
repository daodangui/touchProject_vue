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
				<input type="text"  @keyup.enter="toItem" v-model="searchvalue" placeholder="目的地/酒店/景点/关键字">
			</div>
			<div @click="toMemberPage()" class="headMy">
				<i class="yo-ico">&#xe602;</i>
			</div>
		</div>
		<div class="searchList">
			<div class="listCell" v-if="searchList" v-for="item in searchList">
				<a href="javascript:void(0)">
					<span class="listcelltitle">{{item.name}}</span>
					<span v-if="item.labels" class="labels">{{item.labels}}</span>
					<span class="price" v-if="item.price">
						<span>￥</span>
						<span>{{item.price}}</span>
						<span>起</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data(){
		return {
			searchvalue: '',
			searchList: null
		}
	},
	methods: {
		toMemberPage(){
			this.$store.commit('pushTitle', {
				title: '我的同程',
				route: '/memberPage'
			})
			this.$router.push('/memberPage')
		},
		toItem(){
			if(this.searchList && this.searchList.length > 0){
				this.$store.commit('pushTitle', {
					title: this.searchvalue,
					route: '/searchInfo'
				});
				this.$store.commit('changeSV', this.searchvalue);
				this.$router.push('/searchInfo');
			}
		}
	},
	watch: {
		searchvalue: function(newsearchvalue){
			var $this = this;
			if(newsearchvalue != ''){
				axios.get('/api/AjaxHelper/GlobalSearchHandler.ashx', {
				    params: {
				    	hotelDataFlag: 'new',
						keyword: window.encodeURI(newsearchvalue),
						selectCity: 53,
						coordtype: 'baidu'
				    }
				})
				.then(function (response) {
					if($this.searchvalue != ''){
						$this.searchList = response.data.Response.result.doc;
					}
				})
				.catch(function (error) {
				    console.log(error);
				});
			}else{
				this.searchList = null;
			}
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
	background-color: #fff;
	z-index: 100;
	top: 0px;
	position: absolute;
	top: 0px;
	box-shadow: .05rem 0rem .2rem #aaa;
	@include flexbox;
	@include flex-flow(column wrap);
	@include align-items;
	@include justify-content;
	.headcontainer{
		width: 96%;
		height: .877rem;
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
	.searchList{
		width: 100%;
		overflow-y: auto;
		background-color: #fff;
		max-height: 11rem;
		&>div{
			height: .8rem;
			border-bottom: .01rem solid #ddd;
			&>a{
				&:active{
					background-color: #eee;
				}
				line-height: .8rem;
				display: inline-block;
				height: 100%;
				width: 100%;
				color: #444;
				font-size: .28rem;
				padding: 0rem .4rem;
				.price{
					float: right;
					color: #999;
					&>span:not(:last-child){
						color: #ff4614;
					}
					&>span:not(:nth-child(2)){
						font-size: .15rem;
					}
					&>span:nth-child(2){
						font-size: .3rem;
					}
				}
				.listcelltitle:before{
					content: "";
					display: inline-block;
					width: .5rem;
					height: .5rem;
					vertical-align: middle;
					margin-right: .15rem;
					background: url(../assets/images/limages/searchList.png) no-repeat;
					@include background-size(.5rem auto);
					background-position: 0rem -1.3rem;
				}
				.labels{
					color: #999;
					font-size: .2rem;
					margin-left: .1rem;
				}
			}
		}
	}
}
</style>