import { combineReducers } from 'redux';
import { imgReducer, autoComplete } from 'store/reducers/photoReducer';

const rootReducer = combineReducers({
	img: imgReducer,
	autoComplete,
});

export default rootReducer;
