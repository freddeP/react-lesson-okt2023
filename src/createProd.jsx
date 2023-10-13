import { useState } from "react";


function CreateProd({setProducts}) {
/* 
    const [title, setTitle]= useState("bla");
    const [desc, setDesc]= useState("bla desc");


    function changeTitle(ev){
        setTitle(ev.target.value);
    }
    function changeDesc(ev){
        setDesc(ev.target.value);
    } */



    function createProduct(ev){

        ev.preventDefault();

        // ev är window.event
        // ev.target är vårt formulär som triggade submit-händelsen


        let title = ev.target.title.value;
        let desc = ev.target.desc.value;
        let id = Date.now();
        let p = {id, title, desc}

        setProducts(prev=>[p,...prev]);
        ev.target.reset();
     
    }



    return ( 
        <div className="form" title= "Create a product">

            <h3>Create a Product</h3>
            <form onSubmit={createProduct} action="" method="post">

                <input  type="text" name="title" placeholder="Title of product" />
       
                <input type="text" name="desc" placeholder="Description" />
            
                <input type="submit" value="Save" />

            </form>



        </div>
     );
}

export default CreateProd;