import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import pin from 'assets/icon/pin.svg';
import user from 'assets/icon/user.svg';

const Backdrop = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const Img = styled.img`
	min-width: 45%;
	max-width: 75%;
	max-height: 75%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	height: 85%;
	background-color: white;
`;

const ImgInfo = styled.div`
	position: absolute;
	display: flex;
	width: 60%;
	top: 30px;
	margin-left: 40px;
`;

const Nav = styled.nav`
	position: relative;
	width: 100%;
	height: 15%;
`;

const StyledButton = styled(ButtonIcon)`
	width: 55px;
	position: absolute;
	top: 20px;
	right: 35px;
`;
const StyledParagraph = styled(Paragraph)`
	display: flex;
	align-items: center;

	:before {
		content: '';
		display: block;
		margin-right: 15px;
		background-image: url(${(props) => (props.index === 0 ? user : pin)});
		background-repeat: no-repeat;
		background-position: 50% 50%;
		width: 30px;
		height: 25px;
	}
`;

const Modal = ({ selectedImg, setSelectedImg, imgDetails }) => (
	<Backdrop>
		<Wrapper>
			<Nav>
				<ImgInfo>
					{imgDetails.map((item, i) => (
						<StyledParagraph index={i}>{item || 'No Data'}</StyledParagraph>
					))}
				</ImgInfo>
				<StyledButton
					onClick={() => {
						setSelectedImg(null);
					}}
				/>
			</Nav>
			<Img src={`${selectedImg}`} alt="" />
		</Wrapper>
	</Backdrop>
);
Modal.propTypes = {
	selectedImg: PropTypes.string.isRequired,
	setSelectedImg: PropTypes.func.isRequired,
	imgDetails: PropTypes.string.isRequired,
};

export default Modal;
