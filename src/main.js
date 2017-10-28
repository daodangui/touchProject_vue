import Vue from 'vue';

import vueRouter from 'vue-router';

//引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

//引入样式
import './styles/app.scss';

//引入路由
import routes from '@/router/routes';

Vue.use(vueRouter);
Vue.use(Mint);

const router = new vueRouter({
  routes
});

new Vue({
	router
}).$mount('#body')