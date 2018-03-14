import auth0 from 'auth0-js';

class Auth {
	constructor(){
		this.auth = new auth0.WebAuth({
			domain:         '{auth_domain}',
    		clientID:       '{client_it}',
    		redirectUri:    '{callback}',
			responseType: 'token id_token',
    		scope: 'openid'
  		});
	}

	login(pass, callback){
		this.auth.redirect.loginWithCredentials({
      	connection: 'Username-Password-Authentication',
      	username: '{username}',
      	password: pass,
      	scope: 'openid'
    	}, callback);
	}

	handleCallback(callback){
		this.auth.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				this.setSession(authResult);
				if(callback) callback(true);
			} else {
				if(callback) callback(false);
 			}
		});
	}

	setSession (authResult) {
		let expiresAt = JSON.stringify(
			authResult.expiresIn * 1000 + new Date().getTime()
		);
   	localStorage.setItem('access_token', authResult.accessToken);
   	localStorage.setItem('id_token', authResult.idToken);
   	localStorage.setItem('expires_at', expiresAt);
   }

	getToken(){
		return localStorage['id_token'];
	}

	logout(){
		localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
	}

	loggedIn(){
		if ( localStorage['access_token']&&localStorage['expires_at'] ){
			let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
			return new Date().getTime() < expiresAt;
		} else return false;
	}
}

export default {
	install(Vue,options){
		Vue.prototype.$auth = new Auth();
	}
}
