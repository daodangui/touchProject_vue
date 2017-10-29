<template>
	<div class="searchInfo">
		<header class="header">
			<cpt-head />
		</header>
		<nav class="searchmenu">
			<div class="menuList">
				<ul v-if="menuList">
					<li v-for="item in menuList" :key="item.id"><a href="javascript:void(0)">{{item.innerTypeName}}</a></li>
				</ul>
			</div>
			<div class="menumore" @click="showmorelist">
				<i class="fa" :class="downOrup"></i>
			</div>
		</nav>
		<div class="menubtnList" :style="menuListStyle">
			<template v-if="menuList">
				<mt-button  size="small" class="menubtnitem" v-for="(item, index) in menuList" :key="item.id" type="default">{{item.innerTypeName}}</mt-button>	
			</template>
		</div>
		<section>
			<cpt-itemlist :sortvalue="sortvalue"></cpt-itemlist>
		</section>
		<footer class="sIfooter">
			<mt-tabbar v-model="selected" class="sIfcontent">
			  <mt-tab-item id="出发地" class="iconTitle">
			    <i slot="icon" class="yo-ico">&#xebd4;</i>
			    出发地
			  </mt-tab-item>
			  <mt-tab-item id="游玩天数" class="iconTitle">
			    <i slot="icon" class="yo-ico">&#xe621;</i>
			    游玩天数
			  </mt-tab-item>
			  <mt-tab-item id="排序" class="iconTitle">
			    <i slot="icon" class="yo-ico">&#xe66c;</i>
			    排序
			  </mt-tab-item>
			  <mt-tab-item id="筛选" class="iconTitle">
			    <i slot="icon" class="yo-ico">&#xe60a;</i>
			    筛选
			  </mt-tab-item>
			</mt-tabbar>
			<mt-popup v-model="oneVisible" position="bottom">
				<div class="chufadi">
					<div class="cfdcell">
						<span>不限</span>
					</div>
					<div class="cfdcell">
						<span>成都</span>
					</div>
					<div class="cfdcell">
						<span>北京</span>
					</div>
					<div class="cfdcell">
						<span>苏州</span>
					</div>
				</div>
			</mt-popup>
			<mt-popup v-model="priceVisible" position="bottom">
				<div class="chufadi">
					<div class="cfdcell">
						<span style="color:#2ebd59">同城推荐</span>
					</div>
					<div class="cfdcell" @click="sortitem(true)">
						<span>价格 低-高</span>
					</div>
					<div class="cfdcell" @click="sortitem(false)">
						<span>价格 高-低</span>
					</div>
				</div>
			</mt-popup>
		</footer>
	</div>
</template>

<script>
import cptHead from '@/components/scenery/yheader.vue';
import cptitemlist from '@/components/search/yfind.vue';
import axios from 'axios';
export default {
	data(){
		return {
			downOrup: {
				'fa-chevron-down': true,
				'fa-chevron-up': false
			},
			selected: '',
			menuList: null,
			menuListStyle: {
				display: 'none'
			},
			oneVisible: false,
			priceVisible: false,
			sortvalue: ''
		}
	},
	watch: {
		selected: function(val, oldval){
			switch (val){
				case '出发地': {
					this.oneVisible = true;
					break;
				}
				case '游玩天数': {

					break;
				}
				case '排序': {
					this.priceVisible = true;
					break;
				}
				case '筛选': {

					break;
				}
			}
		},
		oneVisible: function(newvalue){
			if(!newvalue){
				this.selected = '';
			}
		},
		priceVisible: function(newvalue){
			if(!newvalue){
				this.selected = '';
			}
		}
	},
	methods: {
		showmorelist(){
			this.downOrup['fa-chevron-down'] = !this.downOrup['fa-chevron-down'];
			this.downOrup['fa-chevron-up'] = !this.downOrup['fa-chevron-up'];
			if(this.menuListStyle.display == 'none'){
				this.menuListStyle.display = 'block';
			}else{
				this.menuListStyle.display = 'none';
			}
		},
		sortitem: function(bool){
			if(bool){
				this.sortvalue = '低高';
			}else{
				this.sortvalue = '高低';
			}
		}
	},
	components: {
		'cpt-head': cptHead,
		'cpt-itemlist': cptitemlist
	},
	created(){
		document.documentElement.style.fontSize = '31.25vw';
		var $this = this;
		var searchValue = this.$store.state.search.searchValue;
		axios.get('/api/AjaxHelper/DestinationSearchHandler.ashx', {
		    params: {
		    	destName: searchValue,
				dataType: 'Tab'
		    }
		})
		.then(function (response) {
			$this.menuList = response.data.response.innerTypeCountList.record;
		})
		.catch(function (error) {
		    console.log(error);
		});
	}
}
	
</script>

<style lang="scss">
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.searchInfo{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-color: #fff;
	.menubtnList{
		padding: .1rem;
		position: absolute;
		background-color: #fff;
		z-index: 100;
		.menubtnitem{
			font-size: .12rem;
			margin: .05rem;
		}
		border-bottom: .01rem solid #ddd;
	}
	.header{
		background: #fff;
		border-bottom: .01rem solid #ddd;
	}
	.searchmenu{
		height: .394rem;
		@include flexbox;
		color: #333;
		border-bottom: .01rem solid #ddd;
		.menumore{
			width: .4rem;
			border-left: .01rem solid #ddd;
			text-align: center;
			line-height: .394rem;
		}
		.menuList{
			@include flex;
			overflow: auto;
			ul{
				width: 1000px;
				li{
					height: 100%;
					float: left;
					line-height: .365rem;
					a{
						color: #333;
						padding: 0rem .15rem;
						display: inline-block;
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	.sIfooter{
		.chufadi{
			height: 3rem;
			width: 100vw;
			background-color: #fff;
			.cfdcell{
				width: 100%;
				height: .4rem;
				border-bottom: .01rem solid #ddd;
				text-align: center;
				line-height: .4rem;
				&:active{
					background-color: #eee;
				}
			}
		}
		i{
			font-size: .2rem;
			color: #ddd;
		}
		.sIfcontent{
			background-color: #333333;
		}
		.iconTitle{
			color: #ddd;
		}
		.is-selected{
			background-color: #333333;
			color: #2ebd59;
			i{
				color: #2ebd59;
			}
		}
	}
	section{
		height: 4.35rem;
		overflow: auto;
	}
}
</style>