
export default {
	state: {
		showlist:[]
	},
	mutations:{
		addshowlist(state, obj) {
     		state.showlist.push(obj);
   		},
   		removeshowlist(state) {
   			var a=state.showlist.length;
     		state.showlist.splice(a-1,1);
   		},
	}
}