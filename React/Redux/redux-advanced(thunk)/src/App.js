import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { uiSliceActions } from './store/ui-slice'
import Notification from './components/UI/Notification'
import { sendCardData, fetchData } from './store/cart-actions'

let isInitial = true;

function App() {

  const showCart = useSelector(state => state.uiSliceReducer.showCart);
  const cart = useSelector(state => state.cartSliceReducer);
  const notification = useSelector(state => state.uiSliceReducer.notification);

  const dispatch = useDispatch();

  useEffect(() => {

    // const sendCartData = async () => {

    //   dispatch(uiSliceActions.showNotification({
    //     status: 'pending',
    //     title: 'Sending...',
    //     message: 'Sending cart data!'
    //   }))

    //   const response = await fetch('https://movie-1fd5c-default-rtdb.firebaseio.com/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart)
    //   });

    //   if (!response.ok) {
    //     throw new Error('Sending card data failed');
    //   }
    // }

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed === true) {
      dispatch(sendCardData(cart))
    }



    // dispatch(uiSliceActions.showNotification({
    //   status: 'success',
    //   title: 'Success!',
    //   message: 'Send cart data successfully!'
    // }))

    // sendCartData().catch((error) => {
    //   dispatch(uiSliceActions.showNotification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sending cart data failed!'
    //   }))
    // })

  }, [cart, dispatch])

  useEffect(() => {
    dispatch(fetchData());
  }, [])



  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>

  );
}

export default App;
