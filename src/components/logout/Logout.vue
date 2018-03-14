<template>
	<div class="logout container-fluid">
		logging out now
	</div>
</template>

<script>
	export default{
		created(){
			this.$auth.logout();
			this.$router.push('/');
		}
	}
</script>

<style scoped>

</style>
