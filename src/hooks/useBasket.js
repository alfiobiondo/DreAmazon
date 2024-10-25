// useBasket.js
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '@/slices/basketSlice';

const useBasket = () => {
	const dispatch = useDispatch();

	const addItemToBasket = (product) => {
		dispatch(addToBasket(product));
	};

	const removeItemFromBasket = (product) => {
		dispatch(removeFromBasket(product));
	};

	return { addItemToBasket, removeItemFromBasket };
};

export default useBasket;
