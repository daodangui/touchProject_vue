import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//引入Vuex模块
import collect from './modules/collect';

const store = new Vuex.Store({
	modules: {
		collect
	}
});

export default store;