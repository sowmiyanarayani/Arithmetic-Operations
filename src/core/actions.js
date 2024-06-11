import arithmeticManager from '../services/arithmeticManager';
const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setNumberA = ({ data }) => ({ firstNumber: data });
const setNumberB = ({ data }) => ({ secondNumber: data });

const setSum = (context) =>
	({ result: arithmeticManager.addition(context) });
const setDifference = (context) =>
	({ result: arithmeticManager.subtraction(context) });
const setProduct = (context) =>
	({ result: arithmeticManager.multiply(context) });
const setQuotient = (context) =>
	({ result: arithmeticManager.divide(context) });
const actions = {
	increaseCount, setNumberA, setNumberB,
	setSum, setDifference, setProduct, setQuotient,
};

export default actions;
