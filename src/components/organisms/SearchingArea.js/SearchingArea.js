import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import AutoComplete from 'components/molecules/AutoComplete/AutoComplete';

const SearchingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 50%;
	height: 60%;
	padding: 20px 20px;
	color: ${({ theme }) => theme.white};
	> * {
		margin-bottom: 30px;
	}
`;

export const SearchingArea = () => (
	<SearchingWrapper>
		<Heading big>Unsplash</Heading>
		<Paragraph>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga
			repellendus illum
		</Paragraph>
		<AutoComplete />
		<Paragraph>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga
			repellendus illum
		</Paragraph>
	</SearchingWrapper>
);
