<template>
	<div class="square">
		<mt-loadmore :bottom-method="loadBottom" :autoFill="false" :bottom-all-loaded="allLoaded" ref="loadmore">
		<header>
			<div><i class="yo-ico">&#xe687;</i></div>
			<div>大广场</div>
			<div><i class="yo-ico">&#xe607;</i></div>
		</header>
		<section>
			<div>
				<div class="dengji">
					<div>
						<span>社区等级排行榜</span>
						<span>更多&gt;</span>
					</div>
					<div v-if="userRankList">
						<div v-for="item in userRankList" :key="item.id"><img :src="item.userPhoto" alt=""></div>
					</div>
				</div>
				<div class="hotht">
					<div>
						<span>热门话题</span>
						<span>更多&gt;</span>
					</div>
					<div v-if="hotSubjectModel">
						<h5>{{hotSubjectModel.title}}</h5>
						<p>
							{{hotSubjectModel.content}}
						</p>
					</div>
					<div>
						<p v-if="hotSubjectModel">
							<i class="yo-ico">&#xe678;</i>
							<span>{{hotSubjectModel.topicCount}}</span>
						</p>
						<a href="javascript:void(0)">参与话题</a>
					</div>
				</div>
				<div class="ht" v-if="otherSubjectModel">
					<div>
						<div>
							<img :src="otherSubjectModel[0].iconUrl" alt="">
							<span>{{otherSubjectModel[0].title}}</span>
						</div>
						<div>
							<img :src="otherSubjectModel[1].iconUrl" alt="">
							<span>{{otherSubjectModel[1].title}}</span>
						</div>
					</div>
					<div>
						<div>
							<img :src="otherSubjectModel[2].iconUrl" alt="">
							<span>{{otherSubjectModel[2].title}}</span>
						</div>
						<div>全部热门话题</div>
					</div>
				</div>
			</div>
			<div v-if="articleList">
				<template v-for="item in articleList">
					<div v-if="item.isVideo == '1'" class="videobox">
						<div class="itemhead">
							<img class="headimg" :src="item.dataSourceIconUrl" alt="">
							<span class="username">{{item.dataSourceTitle}}</span>
							<span class="realname" v-if="item.isRealName == '1'">已实名</span>
						</div>
						<div>
							<div class="videocontent">
								<h5>{{item.title}}</h5>
								<p>{{item.content}}</p>
							</div>
							<div class="videodiv">
								<video controls :poster="item.videoImgUrl">
									<source :src="item.videoUrl" type="video/mp4">
								</video>
							</div>
						</div>
						<div class="boxCount">
							<i class="yo-ico">&#xe678;</i>
							<span>{{item.replyCount}}</span>
							<i class="yo-ico">&#xe614;</i>
							<span>{{item.participantsCount}}</span>
						</div>
					</div>
					<div v-else-if="item.dataType == 7" class="guanfang">
						<div class="itemhead">
							<img class="headimg" :src="item.dataSourceIconUrl" alt="">
							<span class="username">{{item.dataSourceTitle}}</span>
							<span class="realname">官方</span>
						</div>
						<div class="guanfangcontent">
							<img :src="item.imgUrls[0].imgUrlCover" alt="">
							<div class="gfcontent">
								<h5>{{item.title}}</h5>
								<p>
									{{item.content}}
								</p>
							</div>
						</div>
						<div class="boxCount">
							<i class="yo-ico">&#xe678;</i>
							<span>{{item.replyCount}}</span>
							<i class="yo-ico">&#xe614;</i>
							<span>{{item.participantsCount}}</span>
						</div>
					</div>
					<div v-else class="normaluser">
						<div class="itemhead">
							<img class="headimg" :src="item.dataSourceIconUrl" alt="">
							<span class="username">{{item.dataSourceTitle}}</span>
							<span class="realname" v-if="item.isRealName == '1'">已实名</span>
						</div>
						<div class="normalusercontent">
							<div>
								<h5>{{item.title}}</h5>
								<p>{{item.content}}</p>
							</div>
							<div>
								<div>
									<img :src="item.imgUrls[0].imgUrlCover" alt="">
									
								</div>
							</div>
						</div>
						<div class="boxCount">
							<i class="yo-ico">&#xe678;</i>
							<span>{{item.replyCount}}</span>
							<i class="yo-ico">&#xe614;</i>
							<span>{{item.participantsCount}}</span>
						</div>
					</div>
				</template>
			</div>
		</section>
		</mt-loadmore>
		<footer>
			<mt-tabbar v-model="selected">
			  <mt-tab-item id="大广场">
			    <i class="yo-ico">&#xe66e;</i>
			    大广场
			  </mt-tab-item>
			  <mt-tab-item id="小分队">
			    <i class="yo-ico">&#xe625;</i>
			    小分队
			  </mt-tab-item>
			  <mt-tab-item id="我的">
			    <i class="yo-ico">&#xe61a;</i>
			    我的
			  </mt-tab-item>
			</mt-tabbar>
		</footer>
	</div>
</template>

<script>
import axios from 'axios';

var n = 1;

export default {
	data(){
		return{
			selected: '大广场',
			userRankList: null,
			hotSubjectModel: null,
			otherSubjectModel: null,
			articleList: null,
			allLoaded: false
		}
	},
	created(){
		document.documentElement.style.fontSize="31.25vw";
		var $this = this;
		axios.post('/wsq/RainbowHandler.ashx',  {"servicename":"getuserlevelranklist","interfaceid":"wsq.getuserlevelranklist","requrl":"http://tcmobileapi.17usoft.com/communitymiddleapi/CommunityMemberHandler.ashx","reqbody":{"pageIndex":1,"pageSize":5,"reqPlat":"h5"},"iscache":"0"}
		)
		.then(function (response) {
			$this.userRankList = response.data.response.body.userRankList;
		})
		axios.post('/wsq/RainbowHandler.ashx',  {"servicename":"squareindex","interfaceid":"wsq.squareindex","requrl":"http://tcmobileapi.17usoft.com/communitymiddleapi/CommunityIndexHandler.ashx","reqbody":{"EnCodeUserInfo":"382192361","reqPlat":"h5"},"iscache":"0"}
		)
		.then(function (response) {
			$this.hotSubjectModel = response.data.response.body.hotSubjectModel.subjectModel
			$this.otherSubjectModel = response.data.response.body.otherSubjectModel.subjectList
		})
		axios.post('/wsq/RainbowHandler.ashx', {"tagname":"searchguidearticlelist","servicename":"searchguidearticlelist","interfaceid":"wsq.searchguidearticlelist","requrl":"http://tcmobileapi.17usoft.com/communitymiddleapi/CommunityIndexHandler.ashx","reqbody":{"pageSize":12,"pageIndex":1,"EnCodeUserInfo":"382192361","reqPlat":"h5"},"iscache":0}
		)
		.then(function (response) {
			$this.articleList = response.data.response.body.articleList;
		})
	},
	methods: {
		loadBottom(){
			var $this = this;
			axios.post('/wsq/RainbowHandler.ashx', {"tagname":"searchguidearticlelist","servicename":"searchguidearticlelist","interfaceid":"wsq.searchguidearticlelist","requrl":"http://tcmobileapi.17usoft.com/communitymiddleapi/CommunityIndexHandler.ashx","reqbody":{"pageSize":12,"pageIndex": ++n,"EnCodeUserInfo":"382192361","reqPlat":"h5"},"iscache":0})
			.then(function(response) {
				$this.articleList = $this.articleList.concat(response.data.response.body.articleList);
			})
			this.$refs.loadmore.onBottomLoaded();
		}
	}
}	
</script>

<style lang="scss">
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.square{
	header{
		width: 100%;
		height: .44rem;
		line-height: .44rem;
		@include flexbox;
		@include justify-content(space-between);
		&>div{
			text-align: center;
		}
		&>div:first-child{
			width: .4rem;
			font-size: .2rem;
			color: #2ebd59;
		}
		&>div:nth-child(2){
			width: .6rem;
			font-size: .18rem;
		}
		&>div:last-child{
			width: .4rem;
			font-size: .2rem;
		
			color: #2ebd59;
		}
	}
	section{
		&>div:first-child{
			margin-bottom: .1rem;
			&>div{
				background-color: #fff;
			}
			&>div:first-child{
				@include flexbox;
				@include flex-flow(column wrap);
				border-bottom: .01rem solid #ddd;
				margin-bottom: .1rem;
				&>div:first-child{
					height: .46rem;
					line-height: .46rem;
					padding: 0rem .1rem;
					border-bottom: .01rem solid #eee;
					&>span:last-child{
						float: right;
						font-size: .12rem;
						color: #999;
					}
				}
				&>div:last-child{
					height: .75rem;
					@include flexbox;
					&>div{
						@include flex;
						@include flexbox;
						@include justify-content;
						@include align-items;
						img{
							width: .5rem;
							height: .5rem;
							@include border-radius(.5rem);
						}
					}
				}
			}
			&>div:nth-child(2){
				height: 2.178rem;
				@include flexbox;
				@include flex-flow(column wrap);
				margin-bottom: .1rem;
				&>div:first-child{
					height: .46rem;
					padding: 0rem .1rem;
					line-height: .46rem;
					border-bottom: .01rem solid #eee;
					&>span:last-child{
						float: right;
						font-size: .12rem;
						color: #999;
					}
				}
				&>div:nth-child(2){
					@include flex;
					width: 100%;
					overflow: hidden;
					h5{
						font-weight: normal;
						font-size: .17rem;
						margin-left: .2rem;
						line-height: .5rem;
					}
					p{
						line-height: .2rem;
						color: #888;
						padding: 0rem .15rem;
					}
				}
				&>div:last-child{
					width: 100%;
					height: .42rem;
					padding: 0rem .15rem;
					@include flexbox;
					@include align-items;
					@include justify-content(space-between);
					p{
						i{
							font-size: .21rem;
						}
						span{
							font-size: .1rem;
							color: #888;
						}
					}
					a:last-child{
						color: #fff;
						display: inline-block;
						background-color: #23beae;
						padding: 0rem .05rem;
					}
				}
			}
			&>div:last-child{
				height: .8rem;
				border-bottom: .01rem solid #ddd;
				@include flexbox;
				@include flex-flow(column wrap);
				width: 100%;
				div{
					padding-left: .05rem;
					line-height: .4rem;
				}
				&>div{
					@include flex;
					@include flexbox;
					width: 100%;
					&>div{
						@include flex;
						img{
							width: .2rem;
							height: .2rem;
						}
					}
				}
			}
		}
		&>div:last-child{
			.headimg{
				width: .2rem;
				height: .2rem;
				@include border-radius(.2rem);
				margin-right: .05rem;
				vertical-align: middle;
			}
			.username{
				font-size: .13rem;
			}
			.realname{
				display: inline-block;
				background-color: #e3cd73;
				padding: 0 .08rem;
				font-size: .09rem;
				color: #fff;
			}
			.videocontent{
				h5{
					line-height: .4rem;
					font-weight: normal;
					font-size: .17rem;
				}
				p{
					line-height: .22rem;
					font-size: .13rem;
					color: #888;
				}
			}
			.boxCount{
				line-height: .2rem;
				position: relative;
				top: .12rem;
				span{
					color: #888;
					font-size: .1rem;
				}
				i{
					font-size: .21rem;
				}
			}
			video{
				display: block;
				width: 100%;
				height: 1.8rem;
				background-color: #000;
			}
			&>div{
				background-color: #fff;
				margin-bottom: .1rem;
			}
			.videobox{
				padding: .15rem;
				background-color: #fff;
				@include flexbox;
				@include flex-flow(column wrap)
				&>div:first-child,.itemhead{
					height: .21rem;
				}
				&>div:nth-child(2){
					height: 2.6rem;
					width: 100%;
				}
				&>div:last-child{
					height: .2rem;
				}
			}
		}
		.guanfang{
			padding: .15rem;
			.guanfangcontent{
				img{
					width: 100%;
					height: auto;
					margin: .1rem 0;
				}
				.gfcontent{
					h5{
						font-weight: normal;
						font-size: .17rem;
						margin-bottom: .1rem;
					}
					p{
						line-height: .2rem;
						color: #888;
					}
				}
			}
		}
		.normaluser{
			padding: .15rem;
			.normalusercontent{
				@include flexbox;
				&>div:first-child{
					width: 68%;
					h5{
						font-weight: normal;
						font-size: .16rem;
						margin: .1rem 0;
					}
					p{
						font-size: .14rem;
						color: #888;
					}
				}
				&>div:last-child{
					@include flex;
					@include flexbox;
					@include justify-content;
					@include align-items;
					&>div{
						width: 90%;
						height: .9rem;
						overflow: hidden;
						img{
							height: 100%;
							position: relative;
							left: -.25rem;
						}
					}
				}
			}
		}
	}
	footer{
		i{
			display: block;
			font-size: .25rem;
			margin-bottom: .05rem;
		}
	}
}
</style>