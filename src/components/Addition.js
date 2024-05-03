import { React } from 'react';
import Total from './Total';
import Inputs from './InputBox';
const Addition = (context) =>
	<div className="box">
		<Inputs { ...context }/>
		<Total { ...context }/>

	</div>;

export default Addition;
