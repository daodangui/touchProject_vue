export default{
	state: {
		login: false,
		username: ''
	},
	mutations: {
		changeLoginState(state, user){
			state.login = user.login
			state.username = user.username
		}
	}
}