import React from 'react';

import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';

import classes from './Screen.module.css';

const Screen = (props) => {
	return (
		<Container className={classes.Screen} maxWidth='xs'>
			<Typography variant='h5' style={{ color: '#45565D' }} align='right'>
				87
			</Typography>
			<Typography variant='h4' style={{ color: '#9CBEC8' }} align='right'>
				{props.previous}
			</Typography>
			<Typography variant='h3' className={classes.current} align='right'>
				{props.current}
			</Typography>
		</Container>
	);
};

Screen.propTypes = {
	current: PropTypes.number.isRequired,
	previous: PropTypes.number.isRequired,
};

export default Screen;
