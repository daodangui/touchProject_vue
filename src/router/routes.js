//member，会员页面组件
import copMemberPage from '../page/member.vue';
import Index from '../page/index.vue';
import cityList from '../page/cityList.vue';
import scenery from '../page/scenery.vue';

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
	}
]