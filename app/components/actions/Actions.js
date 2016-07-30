export function _submitForm(startParams) {
	const action = {
		type: 'SUBMIT_FORM',
		users:startParams.users,
	};
	return action;
}

export function _removeUser(users) {
	const action = {
		type: 'REMOVE_USER',
		users: users.users
	};
	return action;
}

export function _searchedUser(users) {
	const action = {
		type: 'SEARCHED_USER',
		term: users.term,
		users: users
	};
	return action;
}