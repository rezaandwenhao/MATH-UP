import { 
	PULL_HISTORY
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PULL_HISTORY:
			return action.payload;
		default: 
			return state;
	}
};
