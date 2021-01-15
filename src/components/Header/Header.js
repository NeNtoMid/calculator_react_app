import React, { useEffect, useRef } from 'react';

import { Container, Typography } from '@material-ui/core';

import gsap from 'gsap';

const Header = (props) => {
	const iconRef = useRef(null);

	useEffect(() => {
		const iconElement = iconRef.current;

		gsap.to(iconElement, { y: 7, repeat: -1, yoyo: true, duration: 1.5 });
	}, []);

	return (
		<Container component='header'>
			<Typography variant='h1' color='primary' align='center'>
				<i
					ref={iconRef}
					className='fas fa-calculator fa-xs'
					style={{ color: '#3F51B5', transform: 'rotate(-10deg)' }}
				></i>{' '}
				Calculator App
			</Typography>
		</Container>
	);
};

export default Header;
