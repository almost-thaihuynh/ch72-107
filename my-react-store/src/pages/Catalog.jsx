import "./Catalog.css"
import Product from "../components/Product"
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";

function Catalog(){
        const [products, setProducts] = useState([])
        const [cart, setCart] = useState([]);
        //const products = [];


    useEffect(()=>{
        //load the data from te dataservice
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    },[]);//empty array means that this runs only once

    function handleAddToCart(item){
        setCart([...cart, item])//spread element to populate the stateVariable array
        // cart.push(item) wont work because its not a State variable
        console.log("Items Added")
    }

    return(
        <div>
            <h1>Catalog</h1>
            <p className="text-secondary">Cart: {cart.lenth}</p>
                <div className="catalog">
                    <p>Cart: {cart.length}</p>
                        {products.map(prod => <Product key={prod._id} data={prod} onAdd={handleAddToCart}/>)}
                </div>

        </div>
    )
}

export default Catalog;