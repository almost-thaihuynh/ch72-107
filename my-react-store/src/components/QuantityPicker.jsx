import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(){

    const [quantity, setQuantity] = useState (1);
    //.      name.     function.        initial value
    // let [varName, fucName] = useState();

    function handleDecrease(){
        let prevValue = quantity-1;
        if(quantity>0){
            setQuantity(prevValue);
        }

    }
    
    function handleIncrease(){
        let nextVal = quantity+1;
        // quantity = 1;
        setQuantity(nextVal);

    }


    return(
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease}>-</button>
            <label className="label-qty">{quantity}</label>
            <button className="btn-plus" onClick={handleIncrease}>+</button>

        </div>
    )
}
export default QuantityPicker;