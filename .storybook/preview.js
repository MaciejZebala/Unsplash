import GlobalStyle from '../src/theme/GlobalStyles';
import React from 'react';
import { theme } from '../src/theme/mainTheme';
import { ThemeProvider } from 'styled-components';

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		</>
	),
];

// export const decorators = (story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>;

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};
