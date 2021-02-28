import Input from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getImg, autoComplete } from 'store/actions/index';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AutocompleteQuery = styled.div`
	padding: 5px 10px;
	margin: 2px 0;
	color: black;
	cursor: pointer;
	&:hover {
		background-color: rgb(224, 224, 224);
	}
`;

const AutoCompleteWrapper = styled.div`
	width: ${(small) => (small ? '80%' : '100%')};
`;

const QueriesList = styled.ul`
	list-style: none;
	background-color: white;
`;

const AutoComplete = ({ small }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [inpuValue, setInputValue] = useState('');
	const queries = useSelector((state) => state.autoComplete);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		if (inpuValue.length >= 2) dispatch(autoComplete(inpuValue));
	};

	const searchPhoto = async (inputValue) => {
		if (inputValue.length !== 0) {
			await history.push(`/gallery/${inputValue}`);
			dispatch(getImg(inputValue));
			setInputValue('');
		}
	};

	return (
		<AutoCompleteWrapper {...small}>
			<Input
				placeholder="Search"
				onChange={handleInputChange}
				value={inpuValue}
				onKeyPress={(e) => e.key === 'Enter' && searchPhoto(inpuValue)}
			/>
			{inpuValue.length > 2 && (
				<QueriesList>
					{queries.autocomplete.length !== 0 ? (
						queries.autocomplete.map((item) => (
							<AutocompleteQuery
								onClick={() => {
									searchPhoto(item.query);
								}}
								key={item.priority}
								role="button"
							>
								{item.query}
							</AutocompleteQuery>
						))
					) : (
						<AutocompleteQuery>No results</AutocompleteQuery>
					)}
				</QueriesList>
			)}
		</AutoCompleteWrapper>
	);
};

AutoComplete.propTypes = {
	small: PropTypes.bool,
};

AutoComplete.defaultProps = {
	small: false,
};
export default AutoComplete;
