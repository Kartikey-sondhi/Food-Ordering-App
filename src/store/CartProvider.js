import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState ={
    items: [], totalAmount: 0
}

const cartReducer = (state,action) =>{
    if(action.type==="ADD"){
        const updatedItems = state.items.concate(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else if(action.type==="REMOVE"){

    }
    return defaultCartState
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemToCartHandler = (id) =>{
        dispatchCartAction({type: "REMOVE", id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext} onItemAdd={addItemToCartHandler} >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;