import classes from './CartButton.module.css';
import {  useDispatch,useSelector } from 'react-redux'
import {uiSliceActions} from '../../store/ui-slice'


const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state=>state.cartSliceReducer.totalQuantity);
   
  const toggleShowCart= ()=>{
      dispatch(uiSliceActions.toggleShowCart());
  }

  return (
    <button className={classes.button} onClick={toggleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
