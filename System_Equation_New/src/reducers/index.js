import { combineReducers } from 'redux';
//diff piece of reducers play toghether 
import EquationPageReducer from './EquationPageReducer';
import HistoryPageReducer from './HistoryPageReducer';

export default combineReducers({
	//pass an object with single key "library"
	//always return an array
	equationPage: EquationPageReducer,
	historyPage: HistoryPageReducer
});
