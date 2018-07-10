import { 
	X1CONST_CHANGED,
	Y1CONST_CHANGED,
	CONST1_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	x1Const: '',
	y1Const: '',
	const1: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case X1CONST_CHANGED:
			//console.log(action);
			return { ...state, x1Const: action.payload };
		case Y1CONST_CHANGED:
			return { ...state, y1Const: action.payload };
		case CONST1_CHANGED:
			return { ...state, const1: action.payload };
		default:
			return state;
	}
};
