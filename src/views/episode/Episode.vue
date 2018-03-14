<template>
	<div class="episode container-fluid">
		<Player />
		<Episodes />
	</div>
</template>


<script>
	import Player from './player/Player';
	import Episodes from '@/components/episodes/Episodes';

	export default {
		name: 'Episode',
		components:{
			'Player': Player,
			'Episodes': Episodes
		},
		created(){
			this.getEpisodeData();
		},
		watch:{
			'$store.state.show'(t,f){
				this.getEpisodeData()
			},
			'$store.state.episode'(t,f){
				this.getEpisodeData()
			}
		},
		methods:{
			getEpisodeData(){
				if (this.$auth.loggedIn()){
					if (this.$store.state.show&&this.$store.state.episode){
						const safename = this.$store.state.show['safename'];
						const number = this.$store.state.episode['number'];

						if (safename&&number){
							this.$store.dispatch("getData", {
								token: this.$auth.getToken(),
								show: safename,
								episode: number,
								callback: (pass)=>{
									this.$router.push("/show/"+safename);
								}
							},);
						} else this.$router.push("/");
					} else this.$router.push("/");
				} else this.$router.push("/login");
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.show{
		//padding-top: $page-padding-top;
	}
</style>
