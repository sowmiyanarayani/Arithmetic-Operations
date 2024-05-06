const config = {
	countStart: 0,
	increment: 1,
	textBoxes: [
		{
			value: 'firstNumber',
			event: 'setNumberA',
			label: 'A',
			name: 'Enter a number',
		},
		{
			value: 'secondNumber',
			event: 'setNumberB',
			label: 'B',
			name: 'Enter a number',
		},
	],
	operations: [
		{
			label: 'addition',
			action: 'setSum',
		},
		{
			label: 'subtraction',
			action: 'setDifference',
		},
		{
			label: 'multiply',
			action: 'setProduct',
		},
		{
			label: 'divide',
			action: 'setQuotient',
		},
	],
};

export default config;
