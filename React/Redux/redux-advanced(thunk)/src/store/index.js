

import React from 'react';
import ReactDOM from 'react-dom';
// used a type of tool for redux ,which will simplifies the useage of redux.
import { configureStore } from '@reduxjs/toolkit'
import {uiSliceReducer} from './ui-slice'
import {cartReducer} from './cart-slice'

const store = configureStore({
    reducer: {
        uiSliceReducer:uiSliceReducer,
        cartSliceReducer:cartReducer
    }
})



export default store;
