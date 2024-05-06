const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setNumberA = ({ data }) => ({ firstNumber: data });
const setNumberB = ({ data }) => ({ secondNumber: data });
const setSum = ({ state }) =>
	({ result: Number(state.firstNumber) + Number(state.secondNumber) });
const setDifference = ({ state }) =>
	({ result: state.firstNumber - state.secondNumber });
const setProduct = ({ state }) =>
	({ result: state.firstNumber * state.secondNumber });
const setQuotient = ({ state }) =>
	({ result: Math.floor(state.firstNumber / state.secondNumber) });
const actions = {
	increaseCount, setNumberA, setNumberB,
	setSum, setDifference, setProduct, setQuotient,
};

export default actions;
