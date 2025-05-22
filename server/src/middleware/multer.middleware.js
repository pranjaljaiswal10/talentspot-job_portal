import multer from "multer";

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temp")
    },
    filename:function(req,file,cb){
        console.log(file)
        cb(null,`${Date.now()}-${file.fieldname}`)
    }
})

export const upload=multer({
    storage,limits:{
        fileSize:5*1024*1024
    }
})


