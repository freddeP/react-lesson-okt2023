function Product({product, setProducts}) {



    function deleteProduct(){
        setProducts(prev=> prev.filter(p=>p.id!=product.id));

/*         setProducts(function(prods){

            let filteredProds = prod.filter(function(p){

                return p.id!= product.id;

            })
            return filteredProds;

        }) */



    }


    return ( 

        <div className="product">
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <button onClick={deleteProduct}>Delete</button>
        </div>

     );
}

export default Product;