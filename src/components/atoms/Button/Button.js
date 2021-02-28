import styled from 'styled-components';
import close from 'assets/icon/close.svg';

const ButtonIcon = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background-image: url(${close});
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: 40%;
	border: none;
	background-color: ${({ active }) => (active ? 'white' : 'transparent')};
	cursor: pointer;
`;

export default ButtonIcon;
