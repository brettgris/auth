<template>
	<div class="login container-fluid">
		<h2>Login</h2>
    	<p v-if="$route.query.redirect">
      		You need to login first.
    	</p>
    	<form @submit.prevent="login">
      		<p v-if="error" class="error">{{message}}</p>
      		<label><input v-model="pass" placeholder="password" type="password"></label><br>
      		<button type="submit">login</button>

    	</form>
	</div>
</template>

<script>
	export default{
		name: 'Login',
		data(){
			return {
				pass: '',
				message: '',
				error: false
			}
		},
		computed:{
			authenticated(){
				return this.$store.state.authenticated
			}
		},
		methods:{
			login(){
				this.$auth.login(this.pass, (err)=>{
					this.error = true;
					this.message = 'Incorrect Login. Please Try Again.';
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.error {
    	color: red;
  	}
</style>
