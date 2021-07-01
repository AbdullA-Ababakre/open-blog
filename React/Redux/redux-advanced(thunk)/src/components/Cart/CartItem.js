import classes from './CartItem.module.css';
import {cartActions} from '../../store/cart-slice'
import {useDispatch} from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price,itemId } = props.item;
  const dispatch=useDispatch();

  const addItemHandler = (title,quantity,totalPrice,price,itemId)=>{
    dispatch(cartActions.addItem({
        itemId,
        price,
        quantity,
        totalPrice,
        title
    }))
  }

  const removeItemHandler = (itemId)=>{
      dispatch(cartActions.removeItem(itemId));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)})</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>removeItemHandler(itemId)}>-</button>
          <button onClick={()=>addItemHandler(title,quantity,totalPrice,price,itemId)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
