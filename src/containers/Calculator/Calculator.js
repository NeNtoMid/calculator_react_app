import React from 'react';

import useCalculator from './../../hooks/Calculator/useCalculator';

import classes from './Calculator.module.css';

import { Container } from '@material-ui/core';

import Screen from './../../components/Screen/Screen';

import Calculations from './../../components/Calculations/Calculations';

const Calculator = (props) => {
	const { calculator } = useCalculator();
	return (
		<Container component='main' className={classes.Calculator} maxWidth='xs'>
			<Screen
				current={calculator.currentNumber}
				previous={calculator.previousNumber}
			/>
			<Calculations />
		</Container>
	);
};

export default Calculator;
