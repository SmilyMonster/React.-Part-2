import React from 'react';
import User from './User.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "./actions/actions.js";


const users = [
	{name: "Ruben Rubenovich"}, 
	{name: "Masha Labuten"},
	{name: "Papa Jo"},
	{name: "Vasya Vasya"},
	{name: "Sasha Blohina"}
];

export default class UserList extends React.Component {

	constructor(){
		super();

		this.state=
		{
			users: [],
			term: ''
		}

		this._removeUser = this._removeUser.bind(this);
	}

	componentDidMount(){
		this.setState({users: users});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			users: nextProps.users,
			term: nextProps.term
		})
	}

	_removeUser (userId)
	{
		if(confirm('Are you sure ?'))
		{
			let Id = this.props.stateFromReducer.users.indexOf(userId);
			console.log(Id)
			let users= this.props.stateFromReducer.users.slice();
			users.splice(Id, 1);
			this.props._removeUser({users: users})
		}
	}

	_submitForm(evt)
	{
		evt.preventDefault();
		if(this._name.value.length)
		{
			const name = {name: this._name.value}

			const users = this.props.stateFromReducer.users.slice();
				users.push(name);
				this.props._submitForm({users: users});
				this._name.value= '';
		}
	}

	_searchedUser(evt)
	{
		this.props._searchedUser({term: evt.target.value.substr(0, 20)});
	}

	render() {
		
		let filteredUsers = this.props.stateFromReducer.users.filter(
				(user) => {
					return user.name.toLowerCase().indexOf(this.props.stateFromReducer.term.toLowerCase()) !== -1;
				}
		);

		const usersCount = filteredUsers.length;
		let usersList;
		if (usersCount > 0)
		{
			usersList = <ul> 
								{filteredUsers.map((user, index) => 
														{
															return <User key={index} name={user.name} removeUser={this._removeUser.bind(null, user)} state = {this.props.stateFromReducer.users} />
														})
								}
							</ul>
		}
		return (
			<div>
				<div id = "searchBox">
					<input type="text" value = {this.props.stateFromReducer.term} onChange = {this._searchedUser.bind(this)} id = "search" placeholder = "search here ..." />
					<i className="fa fa-search" aria-hidden="true"></i>
				</div>
				{usersList}
				<p id="total">Users in list: {usersCount}</p>
				<form id="add" onSubmit={this._submitForm.bind(this)} >
					<hr />
					<input type="text" placeholder="Введите имя..." ref={input => this._name = input} />
					<input type="submit" value="Добавить"/>
				</form>
			</div>
		)
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
	return {
		stateFromReducer: state
	};
}

const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListConnected;
