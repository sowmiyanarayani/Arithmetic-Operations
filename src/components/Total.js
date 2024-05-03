import { React } from 'react';
import { peek } from '@laufire/utils/debug';
// eslint-disable-next-line max-lines-per-function
const Total = (context) => {
	const {
		state: { total, firstNumber, secondNumber },
		actions: { setTotal },
	} = context;

	peek(total);
	return <div>
		<button
			onClick={ () =>
				setTotal(Number(firstNumber) + Number(secondNumber)) }
		>
			add </button>
		{ total }
		<div>

			<label>c : </label>
			<input
				readOnly={ true }
				type="number"
				placeholder="output"
				value={ total }
			/>
		</div>
	</div>;
};

export default Total;
