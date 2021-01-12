import React from 'react';

import Calculator from './containers/Calculator/Calculator';

import Header from './components/Header/Header';

const App = (props) => {
	return (
		<>
			<Header />
			<Calculator />
		</>
	);
};

export default App;
