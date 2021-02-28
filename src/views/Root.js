import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Search from 'views/Search';
import MainTemplate from 'template/MainTemplate';
import Gallery from 'views/Gallery';
import store from 'store';

const Root = () => (
	<Provider store={store}>
		<MainTemplate>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Search} />
					<Route exact path="/gallery/:data" component={Gallery} />
				</Switch>
			</BrowserRouter>
		</MainTemplate>
	</Provider>
);

export default Root;
