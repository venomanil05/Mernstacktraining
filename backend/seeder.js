import User from './model/User.js';
import Product from './model/Product.js';
import Order from './model/Order.js';
import mongoose from 'mongoose';

//dummy data 
import users from './data/users.js';
import products from './data/products.js';

mongoose
  .connect(process.env.MONGODB_URI)
  .then((conn) => console.log(`connected to db at ${conn.connection.host}`))
  .catch((err) => console.log("Error connecting to db", err.message));

const loadData = async () => {
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        const addedUsers = await User.insertMany(users);
        const adminId = addedUsers[0]._id;
        const addedProducts = await Product.insertMany(
            products.map((p) =>{
            return { ...p, user: adminId };
    }),
    );
    console.log("Data loaded successfully");
    process.exit(0);
    }
    catch(err){
        console.log("Error loading data", err.message);
        process.exit(1);
    }
  };


  const destroyData = async () => {
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("Data destroyed successfully");
        process.exit(0);
    }
    catch(err){
        console.log("Error destroying data", err.message);
        process.exit(1);
    }
  }

  loadData();