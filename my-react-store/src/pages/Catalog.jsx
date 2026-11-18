import "./Catalog.css"
import Product from "../components/Product"
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";

function Catalog(){
        const [products, setProducts] = useState([])
        //const products = [];


    useEffect(()=>{
        //load the data from te dataservice
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    },[]);//empty array means that this runs only once

    return(
        <div className="catalog">
            {products.map(prod => <Product key={prod._id} data={prod}/>)}

        </div>
    )
}

export default Catalog;