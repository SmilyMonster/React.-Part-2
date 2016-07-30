const initialState = {
	users : [
	{name: "Ruben Rubenovich"}, 
	{name: "Masha Labuten"},
	{name: "Papa Jo"},
	{name: "Vasya Vasya"},
	{name: "Sasha Blohina"}
	],
		term: ''
}

export default function patentDetailsReducer(state = initialState, action) {
	switch (action.type) {
		case 'SUBMIT_FORM': {
			const { users } = action
			return Object.assign({}, state, {
				users
			})
		}
		case 'REMOVE_USER': {
			const { users } = action
			return Object.assign({}, state, {
				users

			})
		}
		case 'SEARCHED_USER': {
			const { term } = action
			return Object.assign({}, state, {
				term
			})
		}
		default: {
			return state;
		}
	}
}