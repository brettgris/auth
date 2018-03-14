import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import axios from 'axios';

import Categories from './data/Categories';
const Shows = _.flatMap(Categories, (c)=>c.shows);

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		menu: false,
		categories: Categories,
		shows: Shows,
		show: null,
		episode: null,
		authenticated: false,
		videoID: null
	},
	mutations: {
		menu(state,payload){
			state.menu = payload;
		},
		show(state,payload){
			if (payload){
				state.show = _.find(state.shows,(s)=>s.safename===payload)
			} else {
				state.show = null;
			}
		},
		episode(state,payload){
			if (payload&&state.show&&state.show.episodes){
				state.episode = _.find(state.show.episodes,(s)=>s.number===payload)
			} else {
				state.episode = null;
			}
		},
		authenticated(state,payload){
			state.authenticated = payload;
		},
		video(state,payload){
			state.videoID = payload;
		}
	},
	actions: {
		toggleMenu({commit}){
			commit( "menu", !this.state.menu );
		},
		hideMenu({commit}){
			commit("menu", false);
		},
		setShow({commit},safename){
			localStorage.setItem('show', safename);
			commit("show",safename);
		},
		setEpisode({commit},number){
			localStorage.setItem('episode', number);
			commit("episode",number);
		},
		isAuthenticated({commit}, $auth){
			commit("authenticated", $auth.loggedIn() );
		},
		async getData({commit},params){
			commit('video', null);
			axios.get(`{api_url}${params.token}&show=${params.show}&episode=${params.episode}`)
			.then((res)=>{
				if (res.data){
					if (res.data.status&&res.data.id){
						commit('video',res.data.id);
					} else {
						params.callback(false);
					}
				} else {
					params.callback(false);
				}
			}).catch((err)=>{
				params.callback(false);
			});
		}
	}
})
