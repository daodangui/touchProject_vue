//member，会员页面组件
import copMemberPage from '../page/member.vue';
import Index from '../page/index.vue';
import cityList from '../page/cityList.vue';
import scenery from '../page/scenery.vue';

import details from '../page/details.vue';
import collect from '../page/collect.vue';

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
		name: 'memberPage'
	},
	{
		path: '/scenery',
		component: scenery
	},
	{
		path: '/details',
		component: details,
		name : 'details'
	},
	{
		path: '/collect/:list',
		component: collect,
		name : 'collect'
	}
]