import { React } from 'react';
const Button = (context) => {
	const { actions: { setResult }, data } = context;

	return <div>
		<button onClick={ () => setResult(data) }>{ data }</button>
	</div>;
};

export default Button;
