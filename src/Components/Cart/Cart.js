import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props => {

    const CartItems = (<ul className={classes['cart-items']}>
        {[{
            id: 'm1',
            name: 'Sushi',
            price: 22.99,
            quantity: 2
        }].map((item) => (<li>{item.name} {`Total ${(item.price)*(item.quantity)}`}</li>))}
    </ul>
    );

    return (<Modal onClose={props.onClose}>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}  >Order</button>
        </div>
    </Modal>)
};

export default Cart;