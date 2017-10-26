import Vue from 'vue';

import '../styles/app.scss';

import cptHeader from './components/header.vue';

new Vue({
	el: '#header',
	components: {
		'cpt-header': cptHeader
	}
});