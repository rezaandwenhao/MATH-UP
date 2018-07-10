import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class Appp extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDpCyQI7xNXJeroXkS2PV5dANQIofJGZPw',
			authDomain: 'system-equation-solver.firebaseapp.com',
			databaseURL: 'https://system-equation-solver.firebaseio.com',
			projectId: 'system-equation-solver',
			storageBucket: 'system-equation-solver.appspot.com',
			messagingSenderId: '655886686459'
		};
		firebase.initializeApp(config);
	}
	render() {
	const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

	return (
		<Provider store={store}>
			<View style={{ flex: 1 }}>
				<Router />
			</View>
		</Provider>
	);
}
};

export default Appp;
