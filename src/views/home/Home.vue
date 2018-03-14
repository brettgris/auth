<template>
	<div class="home container-fluid">
		<div class="category" v-for="cat in categories">
			<h2>{{cat.name}}</h2>
			<ul>
				<li v-for="show in cat.shows">
					<router-link :to="{path:`/show/${show.safename}`}">
						{{show.name}}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		computed:{
			categories(){
				return this.$store.state.categories;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.home{
		.category{
			margin-bottom: 30px;

			&:last-child{
				margin-bottom: 0;
			}

			h2{

			}

			ul{
				li{
					a{

					}
				}
			}
		}
	}
</style>
