function Product({product, setProducts}) {



    function deleteProduct(){
        setProducts(prev=> prev.filter(p=>p.id!=product.id));

    }

    function updateProduct(ev){
        ev.preventDefault();
        let title = ev.target.title.value || product.title;
        let desc = ev.target.desc.value || product.desc;
        let id = product.id;

        setProducts(prev=>{

            let cur = prev.find(p=>p.id==id);
            cur.title = title;
            cur.desc = desc;
            return [...prev];
        });

    }


    return ( 

        <div className="product">
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <button onClick={deleteProduct}>Delete</button>

            <hr />
            <h3>Edit a Product</h3>
            <form onSubmit={updateProduct} action="" method="post">

                <input  type="text" name="title" placeholder={product.title} />
       
                <input type="text" name="desc" placeholder = {product.desc} />
            
                <input type="submit" value="Update" />

            </form>

        </div>

     );
}

export default Product;