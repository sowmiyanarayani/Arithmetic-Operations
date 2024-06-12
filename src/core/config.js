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
	operations: ['add', 'subtract', 'multiply', 'divide'],
};

export default config;
