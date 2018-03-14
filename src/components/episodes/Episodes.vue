<template>
	<div class="episodes" v-if="ready">
		<h2>Episodes</h2>
		<ul>
			<Episode v-for="episode in episodes" :key="show.safename+episode.number" v-bind:show="show.safename" v-bind:episode="episode"/>
		</ul>
	</div>
</template>

<script>
	import Episode from './episode/Episode';

	export default {
		name: 'Episodes',
		components:{
			'Episode': Episode
		},
		computed:{
			show(){
				return this.$store.state.show;
			},
			episodes(){
				return this.$store.state.show.episodes;
			},
			ready(){
				return (this.$store.state.show&&this.$store.state.show.episodes)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.episodes{

	}
</style>
