import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import './Block.css';

const Block = (props) => {
	return (
		<>
			<Button variant='outlined' className='btn' onClick={props.click}>
				{props.children}
			</Button>
		</>
	);
};

Block.propTypes = {
	click: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Block;
