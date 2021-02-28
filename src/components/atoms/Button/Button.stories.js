import React from 'react-dom';
import close from 'assets/icon/close.svg';
import Button from './Button';

export default {
	title: 'Example/Button',
	component: Button,
};

export const Normal = () => <Button icon={close} />;
// export const Search = () => <Input search placeholder="search" />;
