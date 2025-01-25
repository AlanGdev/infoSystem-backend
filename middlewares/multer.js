const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images/')
    },
    filename:(req,file,cb)=>{
        const name=file.fieldname+Date.now()+path.extname(file.originalname)
        cb(null,name)
    }
})
upload=multer({
    storage:storage,

})

module.exports=upload