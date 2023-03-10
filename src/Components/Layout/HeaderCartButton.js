import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) =>{

    const cartCtx = useContext(CartContext);

    // const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    //     return currentNumber + item.amount;
    // },0);
    const numberOfCartItems = cartCtx.items.length;

    return <button className={classes.button} onClick={props.onAction}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;