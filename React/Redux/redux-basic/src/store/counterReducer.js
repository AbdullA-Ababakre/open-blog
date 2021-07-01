

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { createSlice} from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    show: true
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        INCREMENT(state) {
            state.counter++
        },
        DECREMENT(state) {
            state.counter--
        },
        INCRESE(state, action) {
            state.counter += action.payload
        },
        TOGGLE(state) {
            state.show = !state.show
        }
    },
})


export const counterReducer=counterSlice.reducer;
export const couterActions = counterSlice.actions;


