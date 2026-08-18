import products from "../model/product.js";

const getproducts= (req, res) => {
    res.send(products);
};

const addproduct= (req,res)=>{
    const data=req.body;
    products.push(data);
    res.send({message:"product added!"});
};

const getproductbyid= (req,res)=>{
    const{ id }=req.params;
    const product=products.find((product) => product.id==id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({error:"product not found!"});
    }
};

export{ getproducts,getproductbyid, addproduct };

