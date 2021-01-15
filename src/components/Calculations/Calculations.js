import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { Grid, Typography, Button } from '@material-ui/core';

import Block from './../UI/Block/Block';

const Calculations = (props) => {
	return (
		<Grid
			container
			style={{
				width: 396,
				boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
			}}
		>
			<Grid item>
				<Block click={props.clearMemory}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						MC
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={props.addNumberToMemory}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						M&#43;
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={props.substractNumberFromMemory}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						M&#8722;
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Block click={props.deleteNumberFromScreen}>
					<i
						className='fas fa-backspace fa-3x icon'
						style={{ padding: '0 18px' }}
					></i>
				</Block>
			</Grid>

			<Grid item>
				<Block click={props.memoryRecall}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						MR
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Block click={props.clearCalculator}>
					<Typography
						variant='h4'
						style={{ color: '#9a0036', fontWeight: 'bold' }}
					>
						C
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={props.changeNumberToPercent}>
					<i className='fas fa-percent fa-3x icon'></i>
				</Block>
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					className='btn'
					color='primary'
					onClick={props.divideNumber}
				>
					<i className='fas fa-divide fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>
			<Grid item>
				<Block click={() => props.addNumberToScreen(7)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						7
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => props.addNumberToScreen(8)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						8
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => props.addNumberToScreen(9)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						9
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Button
					variant='contained'
					className='btn'
					color='primary'
					onClick={props.multiplyNumber}
				>
					<i className='fas fa-asterisk fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>

			<Grid item>
				<Block click={() => props.addNumberToScreen(4)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						4
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => props.addNumberToScreen(5)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						5
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => props.addNumberToScreen(6)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						6
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					className='btn'
					color='primary'
					onClick={props.substractNumber}
				>
					<i className='fas fa-minus fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>

			<Grid item>
				<Block click={() => props.addNumberToScreen(1)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						1
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Block click={() => props.addNumberToScreen(2)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						2
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => props.addNumberToScreen(3)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						3
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					className='btn'
					color='primary'
					onClick={props.addNumber}
				>
					<i className='fas fa-plus fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>
			<Grid item>
				<Block click={props.changeNumberSign}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						&#43;/&#8722;
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => props.addNumberToScreen(0)}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						0
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={props.addDecimalPointToNumber}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						,
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Button
					variant='contained'
					className='btn'
					color='primary'
					onClick={props.summariseNumbers}
				>
					<i className='fas fa-equals fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>
		</Grid>
	);
};

Calculations.propTypes = {
	addNumber: PropTypes.func.isRequired,
	substractNumber: PropTypes.func.isRequired,
	multiplyNumber: PropTypes.func.isRequired,
	addNumberToScreen: PropTypes.func.isRequired,
	deleteNumberFromScreen: PropTypes.func.isRequired,
	clearCalculator: PropTypes.func.isRequired,
	summariseNumbers: PropTypes.func.isRequired,
	changeNumberSign: PropTypes.func.isRequired,
	addDecimalPointToNumber: PropTypes.func.isRequired,
	changeNumberToPercent: PropTypes.func.isRequired,
	clearMemory: PropTypes.func.isRequired,
	addNumberToMemory: PropTypes.func.isRequired,
	substractNumberFromMemory: PropTypes.func.isRequired,
	memoryRecall: PropTypes.func.isRequired,
};

export default memo(Calculations, () => true);
