

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { createStore } from 'redux'
// used a type of tool for redux ,which will simplifies the useage of redux.
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterReducer'
import { authSliceReducer } from './authReducer'



// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             show: false
//         }
//     }

//     if (action.type === 'INCRESE') {
//         return {
//             counter: state.counter + action.amount,
//             show: false
//         }
//     }

//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             show: false
//         }
//     }

//     if (action.type === 'TOGGLE') {
//         return {
//             counter: state.counter,
//             show: !state.show
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);



const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authSliceReducer
    }
})




export default store;
