import product from "../model/product.js";
import user from "../model/user.js";

const getproducts= async (req, res) => {
    const products = await product.find();
    res.send(products);
};

const addproduct= (req,res)=>{
    
};

const getproductbyid= (req,res)=>{
    
};

export{ getproducts,getproductbyid, addproduct };

