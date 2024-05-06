import { React } from 'react';
// eslint-disable-next-line max-lines-per-function
const Total = (context) => {
	const { state: { result }} = context;

	return <div>
		<label>c : </label>
		<input
			readOnly={ true }
			type="number"
			placeholder="output"
			value={ result }
		/>
	</div>;
};

export default Total;
