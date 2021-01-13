import React from 'react';

import useCalculator from './../../hooks/Calculator/useCalculator';

import classes from './Calculator.module.css';

import { Container } from '@material-ui/core';

import Screen from './../../components/Screen/Screen';

import Calculations from './../../components/Calculations/Calculations';

const Calculator = (props) => {
	const {
		calculator,
		handleAddNumber,
		handleSubstractNumber,
		handleDivideNumber,
		handleMultiplyNumber,
		handleAddNumberToScreen,
		handleDeleteNumberFromScreen,
		handleClearCalculator,
		handleSummariseNumbers,
		handleChangeNumberSign,
		handleAddDecimalPointToNumber,
	} = useCalculator();
	return (
		<Container component='main' className={classes.Calculator} maxWidth='xs'>
			<Screen
				current={calculator.currentNumber}
				previous={calculator.previousNumber}
				sum={calculator.sum}
				sign={calculator.sign}
			/>
			<Calculations
				addNumber={handleAddNumber}
				substractNumber={handleSubstractNumber}
				divideNumber={handleDivideNumber}
				multiplyNumber={handleMultiplyNumber}
				addNumberToScreen={handleAddNumberToScreen}
				deleteNumberFromScreen={handleDeleteNumberFromScreen}
				clearCalculator={handleClearCalculator}
				summariseNumbers={handleSummariseNumbers}
				changeNumberSign={handleChangeNumberSign}
				addDecimalPointToNumber={handleAddDecimalPointToNumber}
			/>
		</Container>
	);
};

export default Calculator;
