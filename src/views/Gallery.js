import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getImg, clearAutocomplete } from 'store/actions/index';
import styled from 'styled-components';
import Modal from 'components/organisms/Modal';
import AutoComplete from 'components/molecules/AutoComplete/AutoComplete';

const Wrapper = styled.div`
	min-height: 1400px;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 24px;
	width: 90vw;
	margin: 20px auto;

	@media (max-width: 700px) {
		grid-template-columns: repeat(2, auto);
	}
	@media (max-width: 450px) {
		grid-template-columns: repeat(1, auto);
	}
`;
const ImgContainer = styled.div`
	overflow: hidden;
	height: 0;
	padding: 50% 0;
	position: relative;
`;

const Img = styled.img`
	width: 100%;
	min-height: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	margin: 40px 0;
	@media (max-width: 700px) {
		flex-direction: column;
	}
`;

const BackToHome = styled.a`
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.black};
`;

const NoData = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.grey300};
`;

const Gallery = () => {
	const [selectedImg, setSelectedImg] = useState(null);
	const [imgDetails, setImgDetails] = useState([]);

	const allImg = useSelector((state) => state.img);
	const dispatch = useDispatch();
	const { data } = useParams();

	useEffect(() => {
		dispatch(clearAutocomplete());
		dispatch(getImg(data));
	}, [dispatch]);

	const { img } = allImg;

	return (
		<Wrapper>
			<Navigation>
				<BackToHome href="/">Unsplash</BackToHome>
				<AutoComplete small />
			</Navigation>
			<GridContainer>
				{img.length > 0 &&
					img.map(({ urls, id, description, user }) => (
						<ImgContainer
							onClick={() => {
								setSelectedImg(urls.regular);
								setImgDetails([user.name, user.location]);
							}}
							key={id}
						>
							<Img src={`${urls.regular}`} alt={`${description}`} />
						</ImgContainer>
					))}
			</GridContainer>
			{img.length === 0 && <NoData>No Results :( </NoData>}
			{selectedImg && (
				<Modal
					selectedImg={selectedImg}
					setSelectedImg={setSelectedImg}
					imgDetails={imgDetails}
				/>
			)}
		</Wrapper>
	);
};

export default Gallery;
