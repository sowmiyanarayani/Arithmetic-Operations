const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setNumberA = ({ data }) => ({ firstNumber: data });
const setNumberB = ({ data }) => ({ secondNumber: data });
const setTotal = ({ data }) => ({ total: data });

const actions = { increaseCount, setNumberA, setNumberB, setTotal };

export default actions;
