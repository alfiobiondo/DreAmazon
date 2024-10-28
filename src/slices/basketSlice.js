import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		// Actions
		addToBasket: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		removeFromBasket: (state, action) => {
			const { id, instanceId } = action.payload;
			const index = state.items.findIndex(
				(basketItem) =>
					basketItem.id === id && basketItem.instanceId === instanceId
			);

			let newBasket = [...state.items];

			if (index >= 0) {
				// The item exists in the basket... remove it
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.payload.id}, instanceId ${instanceId}) as it is not in the Basket`
				);
			}

			state.items = newBasket;
		},
	},
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
