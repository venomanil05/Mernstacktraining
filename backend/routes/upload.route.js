import express from "express";
import multer from "multer";
import path from "path";

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

router.post("/",upload.single("image"),(req,res)=>{
    res.send({message:"image uploaded successfully!",image:req.file.path});
});

export default router;