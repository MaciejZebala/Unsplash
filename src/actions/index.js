import axios from 'axios';
import React from 'react';

const apiKey = 'H_DVdroThQ-P1jRiQrgEFRvon4D5dWJXJgSCeChyir0';

export const AppContext = React.createContext();

export const fetchImg = () =>
	axios
		.get(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${apiKey}`)
		.then((res) => res);
