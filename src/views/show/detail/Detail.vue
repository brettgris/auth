<template>
	<div class="detail" v-if="show">
		<h1>{{show.name}} - {{show.season}}</h1>
	</div>
</template>

<script>
	export default {
		name: 'Detail',
		computed:{
			show(){
				return this.$store.state.show;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../styles/variables.scss';

	.detail{

	}
</style>
