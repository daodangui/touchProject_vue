export default{
	state: {
		titles: [
			{
				title: '首页',
				route: '/'
			}
		]
	},
	mutations: {
		pushTitle(state, newTitle){
			state.titles.push(newTitle)
		},
		popTitle(state){
			if(state.titles.length>0){
				state.titles.pop()
			}
		}
	}
}