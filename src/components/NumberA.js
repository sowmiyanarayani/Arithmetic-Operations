
import { React } from 'react';
import { peek } from '@laufire/utils/debug';
const NumberA = (context) => {
	const {
		actions: { setNumberA },
		state: { firstNumber },
	} = context;

	peek(firstNumber);
	return <div>
		<h2> calculation  </h2>
		<label>A : </label>
		<input
			type="number"
			placeholder="first Number"
			value={ firstNumber }
			onChange={ (event) => setNumberA(event.target.value) }
		/>
	</div>;
};

export default NumberA;
