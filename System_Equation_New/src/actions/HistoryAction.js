import firebase from 'firebase';
import { PULL_HISTORY } from './types';

export const historyFetch = (name) => {
	return (dispatch) => {
		firebase.database().ref(`/users/${name}`).once('value')
			/*(function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					//console.log(childSnapshot.key);
					console.log(childSnapshot.val());
					dispatch({ type: PULL_HISTORY, payload: childSnapshot.val() });*/
		.then(function (snapshot) {
			//console.log(snapshot.val());
			dispatch({ type: PULL_HISTORY, payload: snapshot.val() });
		});
	};
};
//};
