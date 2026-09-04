import express from "express";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY,
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
});

const router = express.Router();

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{ 
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
      const filename=Date.now()+"-"+file.originalname;
      cb(null,filename);
    },
});

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedTypes = ['.jpg', '.jpeg', '.png','.gif','.webp'];

    if (file.mimetype.startsWith('image/') || allowedTypes.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG, JPEG, PNG, GIF and WEBP files are allowed"), false);
    }
};

const upload= multer({
    storage,
    fileFilter,
    limits:{fileSize:5*1024*1024},
});

router.post("/",upload.single("image"),async (req,res)=>{
    const resp=await cloudinary.uploader.upload(req.file.path,{
        folder:"himalayanshop",
    });
    res.send({message:"file uploaded successfully!",url:resp.secure_url});
});

export default router;


