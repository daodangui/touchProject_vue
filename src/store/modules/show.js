
export default {
	state: {
		showlist:[]
	},
	mutations:{
		addshowlist(state, obj) {
     		state.showlist.push(obj);
   		},
   		removeshowlist(state) {
     		state.showlist.pop();
   		},
	}
}