import { React } from 'react';
const TextBox = (context) => {
	const { actions, state, data: { value, event, label, name }} = context;

	return <div>
		<label>{ label }</label>
		<input
			type="number"
			value={ state[value] }
			placeholder={ name }
			onChange={ (e) => actions[event](e.target.value) }
		/>
	</div>;
};

export default TextBox;
