import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(){

    return(
        <div className="product">
            <img></img>
            <h5>Title</h5>
            <label>Price</label>
            <label>Total</label>
            <QuantityPicker/>
            
        </div>
    );
}

export default Product;