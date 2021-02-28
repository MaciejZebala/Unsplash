import React from 'react';
import styled from 'styled-components';
import landScape from 'assets/img/landscape.jpg';
import { SearchingArea } from 'components/organisms/SearchingArea.js/SearchingArea';

const ViewWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-image: url(${landScape});
	box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.2);
	background-blend-mode: multiply;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const Search = () => (
	<>
		<ViewWrapper>
			<SearchingArea />
		</ViewWrapper>
	</>
);
export default Search;
