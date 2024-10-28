// useBasket.js
import { useDispatch, useSelector } from 'react-redux';
import {
	addToBasket,
	removeFromBasket,
	selectItems,
} from '@/slices/basketSlice';

const useBasket = () => {
	const dispatch = useDispatch();
	const items = useSelector(selectItems);

	// Calculate total price
	const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);

	// Add item to basket
	const addItemToBasket = (product) => {
		dispatch(addToBasket(product));
	};

	// Remove item from basket
	const removeItemFromBasket = (product) => {
		dispatch(removeFromBasket(product));
	};

	return { addItemToBasket, removeItemFromBasket, items, totalPrice };
};

export default useBasket;
