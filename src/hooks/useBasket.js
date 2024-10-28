// useBasket.js
import { useDispatch, useSelector } from 'react-redux';
import {
	addToBasket,
	removeFromBasket,
	selectItems,
	selectTotal,
} from '@/slices/basketSlice';

const useBasket = () => {
	const dispatch = useDispatch();
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);

	// Add item to basket
	const addItemToBasket = (product) => {
		dispatch(addToBasket(product));
	};

	// Remove item from basket
	const removeItemFromBasket = (product) => {
		dispatch(removeFromBasket(product));
	};

	return { addItemToBasket, removeItemFromBasket, items, total };
};

export default useBasket;
