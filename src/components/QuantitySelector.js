// QuantitySelector.js
import React, { useState } from 'react';

const QuantitySelector = ({ onQuantityChange, quantity: itemQuantity }) => {
	const [quantity, setQuantity] = useState(itemQuantity || 1);

	const increaseQuantity = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
		onQuantityChange(newQuantity);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			const newQuantity = quantity - 1;
			setQuantity(newQuantity);
			onQuantityChange(newQuantity);
		}
	};

	return (
		<div className='flex items-center justify-center text-xs md:w-full md:text-sm'>
			<button onClick={decreaseQuantity} className='button w-9  rounded-l-sm'>
				-
			</button>

			<span className='flex items-center justify-center w-12 border-t-[1px] border-b-[1px] p-[7px] md:flex-grow'>
				{quantity}
			</span>
			<button onClick={increaseQuantity} className='button w-9 rounded-r-sm'>
				+
			</button>
		</div>
	);
};

export default QuantitySelector;
