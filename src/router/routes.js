//member，会员页面组件
import copMemberPage from '../page/member.vue';
import Index from '../page/index.vue';
import cityList from '../page/cityList.vue';
import scenery from '../page/scenery.vue';
import collect from '../page/collect.vue';
import mycollect from '../page/mycollect.vue';
import register from '../page/register.vue';
import login from '../page/login.vue';
import searchInfo from '../page/searchInfo.vue';
import details from '../page/details.vue';
import ycollect from '../page/ycollect.vue';


export default [
	{
		path: '/',
		component: Index,
		children: [
			{
				path: '/cityList',
				component: cityList
			}
		]
	},
	{
		path: '/memberPage',
		component: copMemberPage,
		name: 'memberPage',
		children: [
			{
				path: '/collect',
				component: collect
			}
		]
	},
	{
		path: '/scenery',
		component: scenery
	},
	{
		path: '/mycollect',
		component: mycollect
	},
	{
		path: '/register',
		component: register
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/details',
		component: details,
		name : 'details'
	},
	{
		path: '/ycollect',
		component: ycollect,
		name : 'ycollect'
	},
	{
		path: '/searchInfo',
		component: searchInfo
	}
]