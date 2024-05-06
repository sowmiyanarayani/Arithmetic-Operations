import { React } from 'react';
import './App.scss';
import Arithmetics from './components/Arithmetic';

const App = (context) =>
	<div className="App">
		<Arithmetics { ...context }/>

	</div>;

export default App;
