import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
