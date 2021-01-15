import { useState } from 'react';

import {
	calculateSum,
	proceedMathCalculation,
} from './../../utils/calculateSum';

const useCalculator = () => {
	const [calculator, setCalculator] = useState({
		currentNumber: '',
		sum: '0',
		sign: '',
	});

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
				currentNumber: '',
				sign: '',
			});
		}
	};

	const handleAddNumberToScreen = (number) => {
		if (
			(calculator.currentNumber.length < 13 &&
				calculator.sign &&
				calculator.sum.length < 13) ||
			(!calculator.sign && +calculator.sum === 0)
		) {
			setCalculator((prevState) => ({
				...prevState,
				currentNumber: `${prevState.currentNumber}${number}`,
			}));
		}
	};

	const handleDeleteNumberFromScreen = () => {
		setCalculator((prevState) => ({
			...prevState,
			currentNumber: prevState.currentNumber.substring(
				0,
				prevState.currentNumber.length - 1
			),
		}));
	};

	const handleClearCalculator = () => {
		setCalculator({ currentNumber: '', sum: '0', sign: '' });
	};

	const handleChangeNumberSign = () => {
		setCalculator((prevState) => ({
			...prevState,
			sign: prevState.sign === 'plus' ? 'minus' : 'plus',
		}));
	};

	const handleAddDecimalPointToNumber = () => {
		setCalculator((prevState) => ({
			...prevState,
			currentNumber: `${prevState.currentNumber}.`,
		}));
	};

	const handleChangeNumberToPercent = () => {
		setCalculator((prevState) => ({
			...prevState,
			sum: +prevState.currentNumber ? prevState.sum : `${+prevState.sum / 100}`,
			currentNumber: `${+prevState.currentNumber / 100}`,
		}));
	};

	const [memory, setMemory] = useState({ sum: '0', display: false });

	const handleClearMemory = () => {
		setMemory({ sum: '0', display: false });
	};

	const handleAddNumberToMemory = () => {
		setMemory((prevState) => ({
			sum:
				+calculator.sum !== 0
					? `${+prevState.sum + +calculator.sum}`
					: `${+prevState.sum + +calculator.currentNumber}`,
			display: true,
		}));
	};

	const handleSubstractNumberFromMemory = () => {
		setMemory((prevState) => ({
			sum:
				+calculator.sum !== 0
					? `${+prevState.sum - +calculator.sum}`
					: `${+prevState.sum - +calculator.currentNumber}`,
			display: true,
		}));
	};

	const handleMemoryRecall = () => {
		setCalculator((prevState) => ({
			...prevState,
			sum: memory.sum,
			currentNumber: '',
		}));
	};
	return {
		calculator,
		memory,
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
		handleChangeNumberToPercent,
		handleClearMemory,
		handleAddNumberToMemory,
		handleSubstractNumberFromMemory,
		handleMemoryRecall,
	};
};

export default useCalculator;
