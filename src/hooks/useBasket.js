// useBasket.js
import { useDispatch, useSelector } from 'react-redux';
import {
	addToBasket,
	removeFromBasket,
	updateQuantity,
	selectItems,
	selectTotal,
} from '@/slices/basketSlice';

const useBasket = () => {
	const dispatch = useDispatch();
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);

	const addItemToBasket = (product, quantity = 1) => {
		dispatch(addToBasket({ ...product, quantity }));
	};

	const removeItemFromBasket = (product) => {
		dispatch(removeFromBasket(product));
	};

	const updateItemQuantity = (id, quantity) => {
		dispatch(updateQuantity({ id, quantity }));
	};

	return {
		addItemToBasket,
		removeItemFromBasket,
		updateItemQuantity,
		items,
		total,
	};
};

export default useBasket;
