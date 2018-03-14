<template>
	<div class="player" v-if="episode">
		<div class="description">
			<h1>{{episode.number}} - {{episode.title}}</h1>
		</div>
		<div class="wrapper col-12 col-md-8 col-xl-6">
			<div class="video">
				<iframe v-if="videoID"
					v-bind:src="videoPath"
					allowfullscreen
					webkitallowfullscreen
					mozallowfullscreen
					frameBorder="0"
				></iframe>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Player',
		computed:{
			episode(){
				return this.$store.state.episode;
			},
			videoID(){
				return this.$store.state.videoID;
			},
			videoPath(){
				return "http://players.brightcove.net/1185055426/B1t0D2rYz_default/index.html?videoId="+this.$store.state.videoID;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../styles/variables.scss';

	.player{
		.wrapper{
			position: relative;

			.video{
				padding-top: 56.25%;

				iframe{
					position: absolute;
					top: 0px;
					right: 0px;
					bottom: 0px;
					left: 0px;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
