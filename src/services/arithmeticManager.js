const arithmeticManager = {
	addition: (context) => {
		const { state } = context;

		return Number(state.firstNumber) + Number(state.secondNumber);
	},
	subtraction: (context) => {
		const { state } = context;

		return state.firstNumber - state.secondNumber;
	},
	multiply: (context) => {
		const { state } = context;

		return state.firstNumber * state.secondNumber;
	},
	divide: (context) => {
		const { state } = context;

		return Math.floor(state.firstNumber / state.secondNumber);
	},
};

export default arithmeticManager;
