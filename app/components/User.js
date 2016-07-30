import React from 'react';

export default class Users extends React.Component {
	render() {
		return (
					<li>
						<p>{this.props.name} 
						<a href="#" onClick={this.props.removeUser}><i className="fa fa-ban" aria-hidden="true"></i></a>
						</p>
						<hr />
					</li>
			)
	}
}