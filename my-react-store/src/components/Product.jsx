import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props){

    const [qty, setQty] = useState(1);


    function calculateTotal(){
        const total = props.data.price * qty;
        return total.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    function handleQtyChange(quantity){
        console.log(quantity);
        setQty(quantity);

    }

    function handleAdd(){
        props.onAdd({...props.data, quantity: qty})
    }
    // calculate the Total price using the data from the quantity picker

    return(
        <div className="product">
            <img src={"/images/" + props.data.image}>{}</img>
            <h5>{props.data.title}</h5>
            <label>${props.data.price}</label>
            <label className="product-total">Total: ${calculateTotal()}</label>
            <QuantityPicker onChange={handleQtyChange}/>
            <button class="btn-outline theme-success" onClick={handleAdd}>Add</button>
            
        </div>
    );
}

export default Product;
