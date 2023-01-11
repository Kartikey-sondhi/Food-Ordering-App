import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
const Cart = props => {
    const cartList = useContext(CartContext);

    const CartItems = (<ul className={classes['cart-items']}>
        {cartList.items.map((item) => (<li>{item.name} {item.amount} {`Total ${(item.price)*(item.quantity)}`}</li>))}
    </ul>
    );

    return (<Modal onClose={props.onClose}>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartList.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}  >Order</button>
        </div>
    </Modal>)
};

export default Cart;