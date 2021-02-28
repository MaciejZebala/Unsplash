import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icon/magnifier.svg';

const Input = styled.input`
	width: 100%;
	height: 45px;
	padding: 10px 20px 10px 40px;
	font-size: ${({ theme }) => theme.fontSize.xs};
	background-image: url(${magnifierIcon});
	background-size: 15px;
	background-position: 15px 50%;
	background-repeat: no-repeat;
	font-weight: ${({ theme }) => theme.regular};
	background-color: ${({ theme }) => theme.grey100};
	border: none;
	border-radius: 25px;
	::placeholder {
		text-transform: uppercase;
		letter-spacing: 1px;
		color: ${({ theme }) => theme.grey300};
	}
	${({ radius }) =>
		radius &&
		css`
			border-radius: 50px;
		`}
`;

export default Input;
