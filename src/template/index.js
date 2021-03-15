import Vue from 'vue';
import VueRouter from "vue-router";
import 'vant/lib/index.css';
import App from './App.vue';

// 手动给AutoWeb封装一个promise方法
AutoWeb.autoPromise = function (eventname, params) {
	return new Promise((resolve, reject) => {
		AutoWeb.auto(eventname, params, result => {
			resolve(result);
		});
	});
}

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path:"/",
		component: () => import('./pages/Home.vue')
	}, {
		path:"/home",
		component: () => import('./pages/Home.vue')
	}, {
		path:"/me",
		component: () => import('./pages/Me.vue')
	}, {
		path:"/search",
		component: () => import('./pages/Search.vue')
	}, {
		path:"/settings",
		component: () => import('./pages/Settings.vue')
	}]
});

new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
