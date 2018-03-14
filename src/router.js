import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/home/Home';
import Show from '@/views/show/Show';
import Episode from '@/views/episode/Episode';
import Login from '@/views/login/Login';
import Logout from '@/components/logout/Logout';
import Callback from '@/components/callback/Callback';

import Auth from '@/auth';

Vue.use(Auth);
Vue.use(Router);

const router = new Router({
	mode: 'history',
  	routes: [
		{
		   path: '/',
		   name: 'home',
		   component: Home
		},{
			path: '/show/:safename',
		   name: 'show',
		   component: Show
		},{
			path: '/show/:safename/:episode',
		   name: 'episode',
		   component: Episode
		},{
			path:'/login',
			name: 'login',
			component: Login
		},{
			path:'/logout',
			name: 'logout',
			component: Logout
		},{
			path: '/callback',
			name: 'callback',
			component: Callback
		}
  	]
});

export default router;
