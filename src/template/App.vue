<template>
	<div>
		<router-view></router-view>
		<van-tabbar v-model="tagNavId" fixed @change="changeTagNav">
			<van-tabbar-item icon="home-o">Home</van-tabbar-item>
			<van-tabbar-item icon="search">Search</van-tabbar-item>
			<van-tabbar-item icon="friends-o">Me</van-tabbar-item>
			<van-tabbar-item icon="setting-o">Settings</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
	data() {
		return {
			tagNavId: 0
		}
	},
	methods: {
		changeTagNav() {
			this.$router.push([
				'/home',
				'/search',
				'/me',
				'/settings'
			][this.tagNavId]);
		}
	}
};
</script>
