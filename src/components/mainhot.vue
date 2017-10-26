<template lang="html">
	<div class="mainhot">
		<h3>热门目的地</h3>
		<div class="module-box">
			<template v-if="hotCity">
				<ul>
					<li v-for="i in 7">
						<a href="">{{hotCity[i-1].cellTitle}}</a>
					</li>
					<li>
						<a href="">更多&gt;</a>
					</li>
				</ul>
			</template>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import jsonp from 'jsonp';

export default {
	data(){
		return {
			hotCity: null
		}
	},
	created(){
		var $this = this;
		axios.get('/api/AjaxHelper/GetDestinationList.ashx', {
		    params: {
		    	startcity: 53,
		    	categoryid: 6,
		    	startcityname: '%25E5%258C%2597%25E4%25BA%25AC'
		    }
		})
		.then(function (response) {
		    $this.hotCity = response.data.response.body.groupList[0].cellItem;
		})
		.catch(function (error) {
		    console.log(error);
		});
	}
}
</script>

<style lang="scss" scoped>
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.mainhot{
	height: 2.2355rem;
	background: #fff;
	@include flexbox;
	@include flex-flow(column wrap);
	h3{
		font-size: .27rem;
		text-align: center;
		font-weight: normal;
		height: .6314rem;
		background: #eee;
		line-height: .6314rem;
		color: #fb5300;
		vertical-align: top;
		&:before{
			content: '';
			display: inline-block;
			vertical-align: top;
			width: .40rem;
			height: .45rem;
			background: url(../assets/images/limages/iconsprite.png) no-repeat 0px -3.78rem;
			@include background-size(.5rem auto);
		}
	}
	.module-box{
		@include flex;
		width: 100%;
		padding: 0rem .25rem;
		ul{
			width: 100%;
			height: 100%;
			@include flexbox;
			@include flex-flow(row wrap);
			li{
				display: inline-block;
				width: 25%;
				@include flexbox;
				@include justify-content;
				@include align-items;
				a{
					@include flexbox;
					@include justify-content;
					@include align-items;
					font-size: .22rem;
					color: #333;
					width: 90%;
					height: 65%;
					@include border-radius(30px);
				}
			}
			$hotcitybg: #defbf6 #fdf2d9 #f0f6ff #fdf2d9 #fdf3ff #f0f6ff #fdf3ff #defbf6;
			@for $i from 1 through 8{
				li:nth-child(#{$i}){
					a{
						background: nth($hotcitybg,$i);
					}
				}
			}
		}
	}
}
</style>