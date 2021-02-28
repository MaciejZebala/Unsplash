import React from 'react-dom';
import PropsTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyles';

const MainTemplate = ({ children }) => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</>
);

MainTemplate.propTypes = {
	children: PropsTypes.element.isRequired,
};

export default MainTemplate;
