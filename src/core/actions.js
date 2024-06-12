import arithmeticManager from '../services/arithmeticManager';

const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setNumberA = ({ data }) => ({ firstNumber: data });
const setNumberB = ({ data }) => ({ secondNumber: data });
const setResult = (context) =>
	({ result: arithmeticManager[context.data](context) });
const actions = { increaseCount, setNumberA, setNumberB, setResult };

export default actions;
