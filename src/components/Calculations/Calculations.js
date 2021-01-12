import React from 'react';

import PropTypes from 'prop-types';

import { Grid, Typography, Button } from '@material-ui/core';

import Block from './../UI/Block/Block';

const Calculations = (props) => {
	return (
		<Grid container>
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
					<i className='fas fa-plus fa-3x icon'></i>
				</Block>
			</Grid>

			<Grid item>
				<Block click={() => {}}>
					<Typography
						variant='h4'
						style={{ color: '#263b3a', fontWeight: 'bold' }}
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
		</Grid>
	);
};

Calculations.propTypes = {};

export default Calculations;
