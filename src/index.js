import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
/*import store for redux connection*/
import { configureStore } from './redux/store';

const MainApp = () => (
	<Provider store={configureStore()}>
		<App />
	</Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
