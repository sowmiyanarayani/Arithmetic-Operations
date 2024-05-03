import { React } from 'react';
import Total from './Total';
import NumberA from './NumberA';
import NumberB from './NumberB';

const Addition = (context) =>
	<div className="box">
		<NumberA { ...context }/>
		<NumberB { ...context }/>
		<Total { ...context }/>
	</div>;

export default Addition;
