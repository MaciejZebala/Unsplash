import React from 'react-dom';
import Heading from './Heading';

export default {
	title: 'Example/Heading',
	component: Heading,
};

export const Normal = () => <Heading>Siema Maciek</Heading>;
export const Big = () => <Heading big>Siema Maciek</Heading>;
