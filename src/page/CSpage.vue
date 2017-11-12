<template>
	<div class="CSpage">
		<header>
			<div><i class="yo-ico">&#xe687;</i></div>
			<div>在线客服</div>
			<div><i class="yo-ico">&#xe607;</i></div>
		</header>
		<section>
			<div v-if="alertInfo" class="alertInfo">
				<p>{{alertInfo}}</p>
			</div>
			<template v-for="item in msgList" >
				<div class="msgItem" :class="item.roles == 'server'? 'servermsg':'clientmsg'">
					<p>{{item.username? item.username:'匿名用户'}}</p>
					<p>{{item.content}}</p>
				</div>
			</template>
		</section>
		<footer>
			<div>
				<input type="text" v-model="message">
			</div>
			<div>
				<button @click="sendMsg()">发送</button>
			</div>
		</footer>
	</div>
</template>

<script>
	
export default {
	data(){
		return {
			ws: null,
			message: '',
			user: {
				username : window.username,
				roles: 0,
				content: ''
			},
			msgList: [],
			msgnum: 0,
			alertInfo: ''
		}
	},
	created(){
		document.documentElement.style.fontSize="31.25vw"
	},
	mounted(){
		var $this = this
		this.ws = new WebSocket('ws://10.9.164.43:4000')
		this.ws.onopen = function(){
			this.send(JSON.stringify($this.user))
		}
		this.ws.onmessage = function(msg){
			$this.msgnum++
			if($this.msgnum == 1 || $this.alertInfo == '当前线路繁忙，请稍后！'){
				$this.alertInfo = msg.data
			}else{
				var data = JSON.parse(msg.data)
				data.roles = 'server'
				$this.msgList.push(data)
			}
		}
	},
	methods: {
		sendMsg(){
			this.user.content = this.message
			this.ws.send(JSON.stringify(this.user))
			var data = JSON.parse(JSON.stringify(this.user))
			this.msgList.push(data)
			this.message = ''
		}
	},
	watch: {
		msgList: function(){
			setTimeout(function(){
				if(document.querySelector('section>div:last-child')){
					document.querySelector('section>div:last-child').scrollIntoView(false)
				}
			},50)
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../style/yo/lib/core/merge-extra";
@import "../style/yo/lib/core/merge-config";
@import "../style/yo/lib/core/function";
@import "../style/yo/lib/core/classes";

.CSpage{
	height: 100%;
	@include flexbox();
	@include flex-flow(column nowrap)
	header{
		border-bottom: .01rem solid #ddd;
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
			width: 1rem;
			font-size: .18rem;
		}
		&>div:last-child{
			width: .4rem;
			font-size: .2rem;
		
			color: #2ebd59;
		}
	}
	section{
		overflow: auto;
		@include flex(1);
		width: 100%;
		.alertInfo{
			text-align: center;
			p{
				margin-top: .05rem;
				display: inline-block;
				padding: .02rem .05rem;
				color: white;
				background-color: #ccc;
				border-radius: .05rem;
			}
		}
		.msgItem{
			width: 100%;
			padding: .05rem .1rem;
			font-size: .14rem;
			p:first-child{
				font-size: .12rem;
			}
		}
		.servermsg{
			p:last-child{
				margin-left: .15rem;
				background-color: #FF9999;
				display: inline-block;
				padding: 3px 7px;
				color: white; 
				margin-top: 5px;
				max-width: 240px;
				@include border-radius(7px);
			}
		}
		.clientmsg{
			text-align: right;
			p:last-child{
				margin-right: .15rem;
				background-color: #00aeef;
				display: inline-block;
				padding: 3px 7px;
				color: white; 
				margin-top: 5px;
				max-width: 240px;
				@include border-radius(7px);
			}
		}
	}
	footer{
		background-color: #eee;
		position: static !important;
		@include flexbox();
		height: .46rem;
		margin: 0px;
		border-top: .01rem solid #ddd;
		&>div{
			height: 100%;
			@include flexbox();
			@include justify-content()
			@include align-items()
		}
		&>div:first-child{
			width: 80%;
			input{
				border: .01rem solid #ddd;
				border-radius: .05rem;
				width: 95%;
				height: 70%;
				padding: 0rem .1rem;
			}
		}
		&>div:last-child{
			@include flex(1)
			button{
				border: 0px;
				color: #fff;
				border-radius: .05rem;
				background-color: #1398fd;
				height: 70%;
				width: 95%;
				box-shadow: 0 0 .05rem #ccc;
			}
		}
	}
}
</style>