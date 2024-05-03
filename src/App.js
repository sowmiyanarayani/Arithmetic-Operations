import { React } from 'react';
import './App.scss';
import Addition from './components/Addition';

const App = (context) =>
	<div className="App">
		<Addition { ...context }/>
	</div>;

export default App;
