import axios from "axios";
import { useState, useEffect } from "react";

export default function ApplyIn({ id }){

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const result = await axios.get(`/product?disc=${id}`)
        setProducts(result.data.products);
    };

    useEffect(()=>{
        getProducts();
    }, [])

    return (
        <>
            {products?.map(p=><p style={{lineHeight: 1}} className="my-0 p-0 d-flex">{p.name}</p>)}
        </>
    )
}