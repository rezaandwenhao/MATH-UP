import firebase from 'firebase';
import { PULL_HISTORY } from './types';

export const historyFetch = () => {
	return (dispatch) => {
		firebase.database().ref(`/users`).orderByKey().once("value")
			.then(function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					//console.log(childSnapshot.key);
					//console.log(childSnapshot.val());
					dispatch({ type: PULL_HISTORY, payload: childSnapshot.val() });
			});
		});
	};
};
