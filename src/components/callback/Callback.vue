<template>
	<div class="container-fluid">
		Logging in now
	</div>
</template>

<script>
	export default {
		name: 'Callback',
		created(){
			this.$auth.handleCallback((pass)=>{
				if (pass){
					const redirect = `/show/${localStorage['show']}/${localStorage['episode']}`;
					this.$router.replace(redirect || '/');
				} else {
					this.$router.push("/login");
				}
			});
		}
	}
</script>

<style scoped>

</style>
