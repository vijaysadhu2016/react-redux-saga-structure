import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from './store';//import store for react-redux connection

const MainApp = () => (
	<Provider store={configureStore()}>
		<App />
	</Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
