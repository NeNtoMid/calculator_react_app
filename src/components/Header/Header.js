import React from 'react';

import { Container, Typography } from '@material-ui/core';

const Header = (props) => {
	return (
		<Container component='header'>
			<Typography variant='h1' color='primary' align='center'>
				<i
					className='fas fa-calculator fa-xs'
					style={{ color: '#3F51B5', transform: 'rotate(-10deg)' }}
				></i>{' '}
				Calculator App
			</Typography>
		</Container>
	);
};

export default Header;
