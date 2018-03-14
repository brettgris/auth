<template>
	<li v-if="available">
		<router-link :to="{path:`/show/${show}/${episode.number}`}">
			<h4>{{episode.number}} - {{episode.title}}</h4>
		</router-link>
	</li>
</template>

<script>
	import moment from 'moment';

	export default{
		name: 'Episode',
		props:['show','episode'],
		computed:{
			available(){
				return moment(this.episode.date)<moment();
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
