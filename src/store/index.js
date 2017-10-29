import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//引入Vuex模块
import headTitle from './modules/headTitle';
import collect from './modules/collect';
import show from './modules/show';
import user from './modules/user';
import search from './modules/search';

const store = new Vuex.Store({
	modules: {
		headTitle,
		user,
		search,
		a:collect,
		b:show,
	},
	state:{
		
	}
});

export default store;