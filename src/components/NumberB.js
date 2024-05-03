import { React } from 'react';
const NumberB = (context) => {
	const {
		state: { secondNumber },
		actions: { setNumberB },
	} = context;

	return <div>
		<label>B : </label>
		<input
			type="number"
			placeholder="second number"
			value={ secondNumber }
			onChange={ (event) =>
				setNumberB(event.target.value) }
		/>
	</div>;
};

export default NumberB;
