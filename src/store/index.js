import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//引入Vuex模块
import collect from './modules/collect';
import show from './modules/show';

const store = new Vuex.Store({
	modules: {
		a:collect,
		b:show,
	},
	state:{
		
	}
});

export default store;