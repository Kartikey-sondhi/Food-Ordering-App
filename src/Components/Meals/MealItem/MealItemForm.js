import React, { useRef } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const MealItemForm = props =>{

    const amountInputRef = useRef();
    const mealItemCtx = useContext(CartContext);

    const addInputFormHandler = event =>{
        event.preventDefault();
        // console.log(props.amount);
        const addedItem = {name: props.name, price: props.price, amount: amountInputRef.current.value};

        //This following code checks if the meal is already present in the array, it will not add it again, it will simply just update the array with the new length
        const found = mealItemCtx.items.find(element => element.name === `${props.name}`);
        if(found === undefined){
            mealItemCtx.addItem(addedItem);
            mealItemCtx.totalAmount=mealItemCtx.totalAmount+((addedItem.price)*(addedItem.quantity));
        }
        //if it is not present it will add it
        else{
            console.log(`heyyyy ${found.name}`)
            mealItemCtx.found.amount = mealItemCtx.found.amount + props.amount*props.quantity;
            mealItemCtx.totalAmount= mealItemCtx.totalAmount + props.amount;
        };
    }


    return <form className={classes.form}>
        <Input ref={amountInputRef} label="Amount" name="quantity" input={{
            id: "amount",
            type: "number",
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button onClick={addInputFormHandler}>ADD+</button>
    </form>
};

export default MealItemForm;