import React from 'react-dom';
import Input from './Input';

export default {
	title: 'Example/Input',
	component: Input,
};

export const Normal = () => <Input placeholder="search" />;
export const Radius = () => <Input radius placeholder="search" />;
