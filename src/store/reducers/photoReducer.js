import { FETCH_DATA, SET_AUTOCOMPLETE, CLEAR_AUTOCOMPLETE } from 'store/actions/index';

const initialState = {
	img: [],
	autocomplete: [],
};

export const imgReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				img: action.payload,
			};
		default:
			return state;
	}
};

export const autoComplete = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTOCOMPLETE:
			return {
				autocomplete: action.payload,
			};
		case CLEAR_AUTOCOMPLETE:
			return {
				autocomplete: [],
			};
		default:
			return state;
	}
};
