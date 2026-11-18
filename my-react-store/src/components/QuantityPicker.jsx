import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props){

    const [quantity, setQuantity] = useState (1);
    //.      name.     function.        initial value
    // let [varName, fucName] = useState();

    function handleDecrease(){
        let prevValue = quantity-1;
        if(quantity>0){
            setQuantity(prevValue);
            props.onChange(prevValue);//Notifies the parent
        }

    }
    
    function handleIncrease(){
        let nextVal = quantity+1;
        // quantity = 1;
        setQuantity(nextVal);
        props.onChange(nextVal);//Notifies the parent


    }


    return(
        <div className="quantity-picker">
            <button className="btn-minus btn-outline theme-inverse btn-xs" onClick={handleDecrease}>-</button>
            <label className="label-qty">{quantity}</label>
            <button className="btn-plus btn-outline theme-secondary btn-xs" onClick={handleIncrease}>+</button>

        </div>
    )
}
export default QuantityPicker;
