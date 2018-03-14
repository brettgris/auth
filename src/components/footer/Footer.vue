<template>
	<footer class="footer container">
		<div class="copyrights">
			<span v-for="show in shows" v-html="show.copyright"></span>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		computed:{
			shows(){
				return this.$store.state.shows;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.footer{
		margin-top: 50px;
		text-align: center;

		.copyrights{
			span{
				&:after{
					content: " ";
				}
			}
		}
	}
</style>
