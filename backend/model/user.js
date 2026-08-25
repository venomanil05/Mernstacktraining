import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Fullname:{
        type:String,
        required :true
    },
    Email:{
        type:String,
        required:true,
        unique:[true,"Email must be unique"],
    },
    Password:{
        type:String,
        required:true,
        minLength:6,
    },
    isAdmin: {
    type: Boolean,
    required: true,
    default: false,
   },   
},
{ timestamps: true},
);    
const user = mongoose.model('user',userSchema);

export default user;