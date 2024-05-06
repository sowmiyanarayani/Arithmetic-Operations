import { React } from 'react';
import TextBox from './TextBox';

const Inputs = (context) => {
	const { config: { textBoxes }} = context;

	return textBoxes.map((texts, key) =>
		<TextBox key={ key }{ ...{ ...context, data: { ...texts }} }/>);
};

export default Inputs;
