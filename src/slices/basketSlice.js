// basketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			const { id, quantity = 1 } = action.payload;

			const newBasket = [...state.items];

			const existingItem = newBasket.find((item) => item.id === id);

			if (existingItem) {
				existingItem.quantity += quantity;
			} else {
				newBasket.push({ ...action.payload, quantity });
			}

			state.items = newBasket;
		},
		removeFromBasket: (state, action) => {
			const { id } = action.payload;

			const newBasket = [...state.items];

			const index = newBasket.findIndex((item) => item.id === id);

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${id}, as it is not in the Basket`
				);
			}

			state.items = newBasket;
		},
		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload;

			const newBasket = [...state.items];

			const existingItem = newBasket.find((item) => item.id === id);

			if (existingItem) {
				existingItem.quantity = quantity;
			}

			state.items = newBasket;
		},
	},
});

export const { addToBasket, removeFromBasket, updateQuantity } =
	basketSlice.actions;

// Selectors
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
	state.basket.items.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

export default basketSlice.reducer;
