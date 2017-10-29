<template>
	<div class="login">
		<div>
			<dl>
				<dt class="avatar">
					<img v-if="this.$store.state.user.login" src="https://pic4.40017.cn/member/face/2015/08/31/14/jNDStn_90x90_00.png" alt="">
					<img v-else src="https://pic4.40017.cn/index/slide/2017/02/14/16/RUUZTh.png" alt="">
				</dt>
				<dd>
					<template v-if="this.$store.state.user.login">
						<a href="javascript:void(0)">{{this.$store.state.user.username}}</a>
						<span class="userTag">普卡会员</span>
					</template>
					<template v-else>
						<a @click="toLogin()" href="javascript:void(0)">登录</a>/<a @click="routerToregister()" href="javascript:void(0)">注册</a>	
					</template>
				</dd>
			</dl>
		</div>
		<div>
			<p><i></i><span>签到送游币</span></p>
		</div>
		<img src="https://pic4.40017.cn/index/slide/2017/02/03/10/5WpEc4.png" alt="">
		<i class="yo-ico" @click="toLogin()">&#xe601;</i>
	</div>
</template>

<script>
	
export default {
	data(){
		return {

		}
	},
	methods: {
		routerToregister(){
			this.$store.commit('pushTitle', {
				title: '会员注册',
				route: '/register'
			})
			this.$router.push('/register')
		},
		toLogin(){
			this.$store.commit('pushTitle', {
				title: '会员登录',
				route: '/login'
			})
			this.$router.push('/login')
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../style/yo/lib/core/merge-extra";
@import "../../style/yo/lib/core/merge-config";
@import "../../style/yo/lib/core/function";
@import "../../style/yo/lib/core/classes";

.login{
	height: 1.35rem;
	background: #00c8b3;
	position: relative;
	color: #fff;
	&>div:first-child{
		overflow: hidden;
		dl{
			margin-left: .2rem;
			margin-top: .2rem;
			.avatar{
				width: .6rem;
				height: .6rem;
				overflow: hidden;
				@include border-radius(.6rem);
				img{
					position: relative;
					width: .7rem;
					left: -.05rem;
					top: -.05rem;
				}
			}
			dd,dt{
				display: inline-block;
				vertical-align: top;
			}
			dd{
				margin-left: .1rem;
				font-size: .2rem;
				a{
					color: #fff;
					line-height: .3rem;
				}
				.userTag{
					display: block;
					height: .15rem;
					line-height: .17rem;
					font-size: .1rem;
					color: #fff;
					padding: 0rem .08rem;
					background-color: #009999;
					@include border-radius(.5rem)
				}
			}
		}
	}
	&>div:nth-child(2){
		margin-left: .2rem;
		margin-top: .15rem;
		p{
			font-weight: bold;
			i{
				display: inline-block;
				width: .22rem;
				height: .23rem;
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAvCAYAAACc5fiSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWRiM2JiMy0zOWQ3LWUxNDMtODE1NC04NWZjODA4NjhmOGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUMxM0FERUVDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUMxM0FERURDMTBEMTFFNjgxODE4QTExMjc3QjgzRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGIxOTQwYmQtZDk2OC0zNDQ1LWIwMDQtNWNlNGYwM2E1M2FmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZGIzYmIzLTM5ZDctZTE0My04MTU0LTg1ZmM4MDg2OGY4ZSIv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) no-repeat;
				@include background-size(cover);
				vertical-align: middle;
			}
			span{
				vertical-align: middle;
				margin-left: .05rem;
				position: relative;
				top: .02rem;
			}
		}
	}
	&>img{
		position: absolute;
		width: 1rem;
		height: .54rem;
		right: .5rem;
		bottom: .15rem;
	}
	&>i{
		width: .14rem;
		height: .14rem;
		position: absolute;
		right: .1rem;
		top: 0px;
		bottom: 0px;
		margin: auto 0rem;
	}
}
</style>