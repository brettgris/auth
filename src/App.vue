<template>
	<div id="app">
		<Header />
		<div id="content">
			<transition name="animate">
				<Menu v-if="menu" />
			</transition>

			<div id="page">
		    	<router-view />
				<Footer />
			</div>
		</div>
  	</div>
</template>

<script>
	import Header from '@/components/header/Header';
	import Menu from '@/components/menu/Menu';
	import Footer from '@/components/footer/Footer';

	export default{
		name: 'App',
		components:{
			'Header': Header,
			'Menu': Menu,
			'Footer': Footer
		},
		computed: {
			menu(){
				return this.$store.state.menu
			}
		},
		created(){
			this.routes(this.$route);
		},
		watch:{
			'$route'(t,f){
				this.routes(t);
			}
		},
		methods:{
			routes(t) {
				if (t.params.safename) this.$store.dispatch("setShow", t.params.safename );
				if (t.params.episode) this.$store.dispatch("setEpisode", t.params.episode );
				this.$store.dispatch("isAuthenticated", this.$auth);
    		}
		}
	}
</script>

<style lang="scss">
	@import 'styles/bootstrap.scss';
	@import 'styles/globals.scss';
	@import 'styles/type.scss';
	@import 'styles/variables.scss';

	html, body{
		width: 100%;
		height: 100%;
		position: relative;
	}

	#app{
		position: relative;
		padding-top: $header-height;
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}

	#content{
		height: 100%;
		width: 100%;
		position: relative;
	}

	#page{
		padding-top: $page-padding-top;
	}
</style>
