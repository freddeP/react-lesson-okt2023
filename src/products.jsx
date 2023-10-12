import Product from "./product";
// Importera hook som låter oss hantera STATE
import { useState } from "react";

function Products({products, setProducts}) {


    return (
        <div className="products">
            {products.map(p=>(
             <Product key={p.id} product={p} setProducts={setProducts} ></Product>
           
           ))}
        </div>
      );
}
export default Products;