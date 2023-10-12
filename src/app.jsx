import Header from "./header";
import Products from "./products";
import { useState } from "react";

function App() {


    const [products, setProducts] = useState([
        {id:3, title:"P1", desc:"En produkt"},
        {id:67, title:"P2", desc:"En produkt tilll"},
        {id:34, title:"P3", desc:"En produkt efter en produkt till"},
        {id:346, title:"P4", desc:"Nummer 4"}
    ]);



    return ( 
        <div>
            <Header></Header>
            <h2>Products</h2>

            <Products products={products} setProducts={setProducts}></Products>
 
        </div>
     );
}

export default App;