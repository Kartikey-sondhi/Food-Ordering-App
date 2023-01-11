import React, { useRef } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";

const MealItemForm = props =>{

    const amountInputRef = useRef();

    const addInputFormHandler = event =>{
        event.preventDefault();
        console.log(`{name: ${props.name}, price: ${props.price}, quantity: ${amountInputRef.current.value}}`)
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
        <button onClick={addInputFormHandler} type='submit'>ADD+</button>
    </form>
};

export default MealItemForm;