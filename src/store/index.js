import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//引入Vuex模块
import headTitle from './modules/headTitle';

const store = new Vuex.Store({
	modules: {
		headTitle
	}
});

export default store;