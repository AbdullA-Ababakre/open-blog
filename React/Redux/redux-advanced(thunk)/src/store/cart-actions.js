import { uiSliceActions } from './ui-slice'
import { cartActions } from './cart-slice'

export const fetchData = () => {

    return async (dispatch) => {

        const fetchCartData = async () => {

            const response = await fetch('https://movie-1fd5c-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Could not fetch cart data');
            }

            const data = await response.json();
            return data;
        }

        try {
            const cartData = await fetchCartData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'fetching cart data failed!'
            }))
        }
    }

}

export const sendCardData = (cart) => {

    return async (dispatch) => {
        dispatch(
            uiSliceActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://movie-1fd5c-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Sending card data failed');
            }
        }

        try {
            sendRequest();

            dispatch(uiSliceActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Send cart data successfully!'
            }))
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}