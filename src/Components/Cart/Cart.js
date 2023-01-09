import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props => {

    const CartItems = (<ul className={classes['cart-items']}>
        {[{
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99
        }].map((item) => (<li>{item.name}</li>))}
    </ul>
    );

    return (<Modal>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.action}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>)
};

export default Cart;