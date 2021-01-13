import { useState } from 'react';

const proceedMathCalculation = (calculator, mathCalculation) => {
	let sum;

	let sign = '';

	switch (mathCalculation) {
		case 'plus':
			sum = calculator.sum + calculator.currentNumber;
			sign = 'plus';
			break;
		case 'minus':
			sum = calculator.sum - calculator.currentNumber;
			sign = 'minus';

			break;
		case 'multiply':
			sum = calculator.sum * calculator.currentNumber;
			sign = 'multiply';
			break;
		case 'divide':
			console.log('case');
			sum =
				calculator.currentNumber !== 0
					? calculator.sum / calculator.currentNumber
					: calculator.sum;

			sign = 'divide';
			break;
		default:
			sum = 0;
			sign = '';
			break;
	}

	return {
		sum,
		sign,
	};
};

const calculateSum = (calculator, setCalculator, mathCalculation) => {
	const { sum, sign } = proceedMathCalculation(calculator, mathCalculation);

	if (calculator.currentNumber !== 0 && calculator.sign) {
		setCalculator((prevState) => ({
			...prevState,
			sum,
			currentNumber: 0,
			sign,
		}));
	} else if (calculator.sum === 0) {
		setCalculator((prevState) => ({
			...prevState,
			sign,
			sum: prevState.currentNumber,
			currentNumber: 0,
		}));
	} else {
		setCalculator((prevState) => ({ ...prevState, sign }));
	}
};

const useCalculator = () => {
	const [calculator, setCalculator] = useState({
		currentNumber: 0,
		sum: 0,
		sign: '',
	});

	console.log(calculator);

	const handleAddNumber = () => {
		calculateSum(calculator, setCalculator, 'plus');
	};

	const handleSubstractNumber = () => {
		calculateSum(calculator, setCalculator, 'minus');
	};

	const handleMultiplyNumber = () => {
		calculateSum(calculator, setCalculator, 'multiply');
	};

	const handleDivideNumber = () => {
		calculateSum(calculator, setCalculator, 'divide');
	};

	const handleSummariseNumbers = () => {
		const { sum } = proceedMathCalculation(calculator, calculator.sign);

		if (calculator.sign) {
			setCalculator({
				...calculator,
				sum,
				currentNumber: 0,
				sign: '',
			});
		}
	};

	const handleAddNumberToScreen = (number) => {
		if (
			(`${calculator.currentNumber}`.length < 13 &&
				calculator.sign &&
				`${calculator.sum}`.length < 13) ||
			(!calculator.sign && calculator.sum === 0)
		) {
			setCalculator((prevState) => ({
				...prevState,
				currentNumber: +`${prevState.currentNumber}${number}`,
			}));
		}
	};

	const handleDeleteNumberFromScreen = () => {
		setCalculator((prevState) => ({
			...prevState,
			currentNumber: +`${prevState.currentNumber}`.substring(
				0,
				`${prevState.currentNumber}`.length - 1
			),
		}));
	};

	const handleClearCalculator = () => {
		setCalculator({ currentNumber: 0, sum: 0, sign: '' });
	};

	const handleChangeNumberSign = () => {
		setCalculator((prevState) => ({
			...prevState,
			sign: prevState.sign === 'plus' ? 'minus' : 'plus',
		}));
	};

	const handleAddDecimalPointToNumber = () => {
		console.log(calculator.currentNumber);
		console.log(parseFloat(calculator.currentNumber));
		setCalculator((prevState) => ({
			...prevState,
			currentNumber: parseFloat(`${prevState.currentNumber}.0`),
		}));
		console.log('I am here');
	};
	return {
		calculator,
		handleAddNumber,
		handleSubstractNumber,
		handleAddNumberToScreen,
		handleDivideNumber,
		handleMultiplyNumber,
		handleDeleteNumberFromScreen,
		handleClearCalculator,
		handleSummariseNumbers,
		handleChangeNumberSign,
		handleAddDecimalPointToNumber,
	};
};

export default useCalculator;
