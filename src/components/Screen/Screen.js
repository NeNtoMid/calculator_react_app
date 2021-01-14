import React from 'react';

import PropTypes from 'prop-types';

import { Container, Typography, Grid } from '@material-ui/core';

import classes from './Screen.module.css';

const Screen = (props) => {
	let sign = '';

	switch (props.sign) {
		case 'plus':
			sign = '+';
			break;
		case 'minus':
			sign = '-';
			break;
		case 'multiply':
			sign = '*';
			break;
		case 'divide':
			sign = '/';
			break;

		default:
			break;
	}

	let sum = props.sum;

	if (props.sum.length > 13) {
		const roundedSum = sum.split('');

		roundedSum.length = 13;

		sum = roundedSum;
	}

	let showNumbers = <>&nbsp;</>;

	if ((+props.sum !== 0 && +props.current !== 0) || props.sign) {
		showNumbers = (
			<>
				{sum} {sign} {+props.current !== 0 && props.current}
			</>
		);
	}

	let memory = <div style={{ width: 348, height: 31.25 }}></div>;

	if (props.display) {
		memory = (
			<Typography variant='h6' style={{ color: '#9CBEC8' }} align='left'>
				M
			</Typography>
		);
	}

	return (
		<Grid
			container
			style={{ width: 396, height: 130 }}
			className={classes.Screen}
		>
			<Container>
				{memory}
				<Typography variant='h4' style={{ color: '#9CBEC8' }} align='right'>
					{showNumbers}
				</Typography>

				<Typography variant='h3' className={classes.current} align='right'>
					{+props.current === 0 ? sum : props.current}
				</Typography>
			</Container>
		</Grid>
	);
};

Screen.propTypes = {
	current: PropTypes.string.isRequired,
	sum: PropTypes.string.isRequired,
};

export default Screen;
