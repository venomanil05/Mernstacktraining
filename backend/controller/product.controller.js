import Product from "../model/product.js";
import user from "../model/user.js";

const getproducts= async (req, res) => {
    const products = await Product.find();
    res.send(products);
};

const addproduct= async (req,res) => {
    const newproduct ={
        name:'Sample Name',
        price:70,
        description:'sample description',
        brand:'sample brand',
        category:'sample category',
    }; 
    const product = await Product.create(newproduct);
    res.send({message:"product added successfully!"});
};

// /api/products/:id
const getproductbyid= async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    if(product){
        res.send(product);
    } else{
        res.status(404).send({error:"product not found!"});
    }
};

export{ getproducts,getproductbyid, addproduct };

