import React from 'react';

export default class SearchBar extends React.Component {
	constructor(props)
	{
		super(props);

		this.state = {term: ''};
	}
	
	_userSearch(evt)
	{
		this.setState({search: evt.target.value.substr(0, 20)});
	}

	render ()
	{
		return(<div>
				<input type="text" value = {this.state.term} onChange = { evt => this.setState({ term: evt.target.value})} />
			</div>
			);
	}
}