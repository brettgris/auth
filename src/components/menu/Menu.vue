<template>
	<nav class="menu">
		<div v-for="cat in categories">
			<h3>{{cat.name}}</h3>
			<ul>
				<li v-for="show in cat.shows">
					<router-link :to="{path:`/show/${show.safename}`}" @click.native="hideMenu">{{show.name}}</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Menu',
		methods:{
			hideMenu(){
				this.$store.dispatch('hideMenu');
			}
		},
		computed:{
			categories(){
				return this.$store.state.categories;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.menu{
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		transform: translateX(0%);
		background: $light-grey;
		padding: 15px;

		&.animate-enter-active, &.animate-leave-active {
			transition: all $transition-speed $transition-ease;
		}
		&.animate-enter, &.animate-leave-to /* .fade-leave-active below version 2.1.8 */ {
			transform: translateX(100%);
		}

		&>div{
			margin-bottom: 20px;

			&:last-child{
				margin-bottom: 0;
			}

			h3{
				margin-bottom: 10px;
			}

			ul{


				li{
					margin-bottom:5px;

					&:last-child{
						margin-bottom: 0;
					}

					a{
						color: $white;
					}
				}
			}
		}

	}
</style>
