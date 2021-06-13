
import { createSlice } from '@reduxjs/toolkit'


const initialCartState = {
    items: [
        {
            itemId: 1,
            price: 11,
            quantity: 3,
            totalPrice: 33,
            title: 'Asia'
        },
        {
            itemId: 2,
            price: 9,
            quantity: 2,
            totalPrice: 18,
            title: 'Europe'
        }
    ],
    totalQuantity: 0,
    changed: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.itemId === newItem.itemId);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.itemId,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.itemId === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.itemId !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        },
        replaceCart: (state, action) => {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        }
    },
})




export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;


