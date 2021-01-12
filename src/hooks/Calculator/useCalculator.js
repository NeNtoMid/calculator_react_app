import { useState } from 'react';

const useCalculator = () => {
	const [calculator, setCalculator] = useState({
		currentNumber: 0,
		previousNumber: 0,
	});
	return {
		calculator,
	};
};

export default useCalculator;
