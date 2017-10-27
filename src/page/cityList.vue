<template>
	<div class="cityList" :class="ani">
		<mt-search class="citySearch" v-model="searchValue" cancel-text="取消" placeholder="中文/拼音/首字母">
			<mt-cell v-for="item in hotCity" :title="item" value="热门城市" :key="item.id"></mt-cell>
		</mt-search>
		<mt-index-list class="cLcontent" v-show="showCityList">
			<mt-index-section index="当前">
			    	<mt-cell title="北京"></mt-cell>
			</mt-index-section>
			<template v-for="i in 26" v-if="cityList">
				<mt-index-section :index="String.fromCharCode(i+64)">
					<template v-for="j in 10">
			    		<mt-cell :title="cityList[i*j]"></mt-cell>	
					</template>
			  	</mt-index-section>
			</template>
		</mt-index-list>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			searchValue: '',
			cityList: null,
			ani: {
				'ani': false,
				'elastic-in-right': false
			},
			hotCity: null,
			showCityList: true
		}
	},
	watch: {
		searchValue: function(newSearchValue){
			if(newSearchValue.length > 0){
				this.showCityList = false;
			}else{
				this.showCityList = true;
			}
			var bhotCity = [];
			if(this.cityList instanceof Array){
				this.cityList.forEach(function(value){
					if(value.match(newSearchValue)){
						bhotCity.push(value);
					}
				});
				this.hotCity = bhotCity.length == 0? null : bhotCity;
			}
		}
	},
	created(){
		setTimeout(function(){
			document.documentElement.style.fontSize = '31.25vw';
		},500);
		var $this = this;
		var bcityList = [];
		axios.get('/city/public/app/b2c/statics/js/citydata.json')
		.then(function (response) {
			response.data.forEach(function(value){
				value.s.forEach(function(value){
					bcityList.push(value.n.replace(/市$/,''));
				});
			});
			$this.cityList = bcityList;
		})
		.catch(function (error) {
		    console.log(error);
		});
	},
	mounted(){
		this.ani.ani = true;
		this.ani['elastic-in-right'] = true;
	},
	destroyed(){
		document.documentElement.style.fontSize = '15.625vw';
	}
}	
</script>

<style lang="scss">

.cityList{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 200;
	background: #fff;
	top: 0;
	.citySearch{
		height: 44px;
		background-color: #e9ecf1;
		&>div:first-child{
			background: #e0e4ec;	
		}
	}
	.cLcontent{
		background: #e9ecf1;
		padding: .1rem;
	}
}
</style>