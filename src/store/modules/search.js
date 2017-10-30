export default {
	state: {
		searchValue: ''
	},
	mutations:{
   		changeSV(state, newvalue){
   			state.searchValue = newvalue
   		}
	}
}