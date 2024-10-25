import { useState, useEffect } from 'react';

const useProductCard = (min = 1, max = 5) => {
	const [hasPrime, setHasPrime] = useState(false);
	const [rating, setRating] = useState(min);

	useEffect(() => {
		// Generate a random rating when the component mounts
		const randomRating = Math.floor(Math.random() * (max - min + 1)) + min;
		setRating(randomRating);
	}, [min, max]);

	useEffect(() => {
		// Generate a random has prime when the component mounts
		const randomHasPrime = Math.random() < 0.5;
		setHasPrime(randomHasPrime);
	}, []);

	return { hasPrime, rating };
};

export default useProductCard;
