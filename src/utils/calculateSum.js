const proceedMathCalculation = (calculator, mathCalculation) => {
	let sum;

	let sign = '';

	switch (mathCalculation) {
		case 'plus':
			sum = +calculator.sum + +calculator.currentNumber;
			sign = 'plus';
			break;
		case 'minus':
			sum = +calculator.sum - +calculator.currentNumber;
			sign = 'minus';

			break;
		case 'multiply':
			sum = +calculator.sum * +calculator.currentNumber;
			sign = 'multiply';
			break;
		case 'divide':
			sum =
				+calculator.currentNumber !== 0
					? +calculator.sum / +calculator.currentNumber
					: +calculator.sum;

			sign = 'divide';
			break;
		default:
			sum = '0';
			sign = '';
			break;
	}

	return {
		sum: sum.toString(),
		sign,
	};
};

const calculateSum = (calculator, setCalculator, mathCalculation) => {
	const { sum, sign } = proceedMathCalculation(calculator, mathCalculation);

	if (+calculator.currentNumber !== 0 && calculator.sign) {
		setCalculator((prevState) => ({
			...prevState,
			sum,
			currentNumber: '',
			sign,
		}));
	} else if (+calculator.sum === 0) {
		setCalculator((prevState) => ({
			...prevState,
			sign,
			sum: prevState.currentNumber,
			currentNumber: '',
		}));
	} else {
		setCalculator((prevState) => ({ ...prevState, sign }));
	}
};

export { proceedMathCalculation, calculateSum };
