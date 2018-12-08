import { 
	X1CONST_CHANGED,
	Y1CONST_CHANGED,
	CONST1_CHANGED
} from './types';

export const x1ConstChanged = (text) => {
	return {
		type: X1CONST_CHANGED,
		payload: text.replace(/[^-^0-9^.^/]/g, ''),
	};
};

export const y1ConstChanged = (text) => {
	return {
		type: Y1CONST_CHANGED,
		payload: text.replace(/[^-^0-9^.^/]/g, ''),
	};
};

export const const1Changed = (text) => {
	return {
		type: CONST1_CHANGED,
		payload: text.replace(/[^-^0-9^.^/]/g, ''),
	};
};

/*export const storeInput = ({ x1Const, y1Const, const1, x2Const, y2Const, const2, name }) => {
	return () => {
		firebase.database().ref(`/users/${name}/employees`)
		.push({ x1Const, y1Const, const1, x2Const, y2Const, const2 });
	};
};*/
