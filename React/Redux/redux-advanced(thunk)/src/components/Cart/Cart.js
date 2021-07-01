import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'

const Cart = (props) => {
  const cartItems = useSelector(state => state.cartSliceReducer.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.itemId}
                itemId={item.itemId}
                item={item}
              />
            )
          })
        }

      </ul>
    </Card>
  );
};

export default Cart;
