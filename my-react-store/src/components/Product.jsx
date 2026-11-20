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
        <div className="card product">
            <img src={"/images/" + props.data.image} className="card-image-top" alt="{props.data.title}"/>
            <div className="collapse navbar-collapse" id="navbarNav">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="text-secondary mb-1">{props.data.category}</p>
                <p className="mb-1">Price: ${props.data.price.toFixed(2)}</p>
                <p className="fw-bold">Total: ${calculateTotal()}</p>

                <QuantityPicker onChange={handleQtyChange}/>
                <button className="btn btn-dark w-100 mt-3" onClick={handleAdd}>Add to cart</button>
            </div>            
        </div>
    );
}

export default Product;
