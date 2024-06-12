import { React } from 'react';
import Button from './Button';

const Operators = (context) => {
	const { config: { operations }} = context;

	return operations.map((operation, key) =>
		<Button key={ key }{ ...{ ...context, data: operation } }/>);
};

export default Operators;
