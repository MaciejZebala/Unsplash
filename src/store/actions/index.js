import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_ERROR = 'DATA_ERROR';
export const SET_AUTOCOMPLETE = 'SET_AUTOCOMPLETE';
export const CLEAR_AUTOCOMPLETE = 'CLEAR_AUTOCOMPLETE';

const apiKey = 'H_DVdroThQ-P1jRiQrgEFRvon4D5dWJXJgSCeChyir0';

export const getImg = (imgName) => (dispatch) => {
	// dispatch({ type: FETCH_DATA });
	axios
		.get(`https://api.unsplash.com/search/photos?page=1&query=${imgName}&client_id=${apiKey}`)
		.then(({ data }) => {
			console.log(data);
			dispatch({
				type: FETCH_DATA,
				payload: data.results,
			});
		})
		.catch((err) => {
			dispatch({
				type: DATA_ERROR,
				payload: console.log(err),
			});
		});
};

export const autoComplete = (query) => (dispatch) => {
	axios
		.get(`/autocomplete/${query}`)
		.then(({ data }) => {
			console.log(data);
			dispatch({
				type: SET_AUTOCOMPLETE,
				payload: data,
			});
		})
		.catch((err) => {
			dispatch({
				type: DATA_ERROR,
				payload: console.log(err),
			});
		});
};

export const clearAutocomplete = () => (dispatch) => {
	dispatch({
		type: CLEAR_AUTOCOMPLETE,
	});
};
