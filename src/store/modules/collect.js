
export default {
	state: {
		list:[]
	},
	mutations:{
		addlist(state, obj) {
     		state.list.push(obj);
   		},
   		removelist(state) {
     		state.list.pop();
   		},
	}
}