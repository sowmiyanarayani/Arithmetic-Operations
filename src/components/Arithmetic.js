import { React } from 'react';
import Total from './Total';
import Inputs from './InputBox';
import Operators from './Operators';
const Arithmetics = (context) =>
	<div className="box">
		<h2>calculation</h2>
		<Inputs { ...context }/>
		<Total { ...context }/>
		<Operators { ...context }/>
	</div>;

export default Arithmetics;
