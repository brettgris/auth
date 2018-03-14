<template>
	<header class="header container-fluid">
		<router-link
			to="/"
			@click.native="hideMenu"
		>
			Title Art
		</router-link>

		<router-link v-if="authenticated" to="/logout">Log out</router-link>

		<a @click="toggleMenu">Menu</a>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		computed:{
			authenticated(){
				return this.$store.state.authenticated;
			}
		},
		methods: {
			toggleMenu(){
				this.$store.dispatch('toggleMenu');
			},
			hideMenu(){
				this.$store.dispatch('hideMenu');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.header{
		background: $black;
		color: $white;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		height: $header-height;
		display: flex;
		align-items: center;
		justify-content: space-between;

		a{
			color: $white;
		}
	}
</style>
