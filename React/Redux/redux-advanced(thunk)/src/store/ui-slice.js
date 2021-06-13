
import { createSlice} from '@reduxjs/toolkit'

const initialUiState = {
   showCart:false,
   notification:null
}

export const uiSlice = createSlice({
    name: 'ui-slice',
    initialState: initialUiState,
    reducers: {
        toggleShowCart(state){
            state.showCart=!state.showCart;
        },
        showNotification(state,action){
           state.notification = {
               status:action.payload.status,
               title:action.payload.title,
               message:action.payload.message
           }
        }
    },
})
 

export const uiSliceReducer= uiSlice.reducer;
export const uiSliceActions = uiSlice.actions;


