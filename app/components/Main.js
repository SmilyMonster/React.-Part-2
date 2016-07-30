import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers.js';

const middleware = process.env.NODE_ENV === 'production' ?
	[ thunk ] :
	[ thunk, logger() ];

const store = createStore(
	reducer,
	applyMiddleware(...middleware)
);

class Component extends React.Component {
	 render() {
		return (
			<Provider store={store}>
				<div id="main">
					<UserList />
				</div>
			</Provider>
		)
	}
}

ReactDOM.render(
	 <Component/>, document.getElementById('app')
)