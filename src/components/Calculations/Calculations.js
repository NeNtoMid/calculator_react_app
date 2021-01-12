import React from 'react';

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
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						MC
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						M&#43;
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						M&#8722;
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Block click={() => {}}>
					<i
						className='fas fa-backspace fa-3x icon'
						style={{ padding: '0 18px' }}
					></i>
				</Block>
			</Grid>

			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						MR
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#9a0036', fontWeight: 'bold' }}
					>
						C
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<i className='fas fa-percent fa-3x icon'></i>
				</Block>
			</Grid>
			<Grid item>
				<Button variant='contained' className='btn' color='primary'>
					<i className='fas fa-divide fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						7
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						8
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						9
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Button variant='contained' className='btn' color='primary'>
					<i className='fas fa-asterisk fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>

			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						4
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						5
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						6
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Button variant='contained' className='btn' color='primary'>
					<i className='fas fa-minus fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>

			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						1
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						2
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						3
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Button variant='contained' className='btn' color='primary'>
					<i className='fas fa-plus fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						&#43;/&#8722;
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						0
					</Typography>
				</Block>
			</Grid>
			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
					>
						,
					</Typography>
				</Block>
			</Grid>

			<Grid item>
				<Button variant='contained' className='btn' color='primary'>
					<i className='fas fa-equals fa-3x' style={{ color: '#ebf0f1' }}></i>
				</Button>
			</Grid>
		</Grid>
	);
};

Calculations.propTypes = {};

export default Calculations;
