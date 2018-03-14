<template>
	<div class="show container-fluid">
		<Detail />
		<Episodes />
	</div>
</template>

<script>
	import Detail from './detail/Detail';
	import Episodes from '@/components/episodes/Episodes';

	export default {
		name: 'Show',
		components:{
			'Episodes': Episodes,
			'Detail': Detail
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.show{
		//padding-top: $page-padding-top;
	}

</style>
