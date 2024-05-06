import { React } from 'react';
const Button = (context) => {
	const { actions, data: { label, action }} = context;

	return <div>
		<button onClick={ () => actions[action]() }>{ label }</button>
	</div>;
};

export default Button;
