express=require('express')
const multer=require('../middlewares/multer')
const techCtrl=require('../controllers/tech')

const router=express.Router()

router.post('/newtech',multer.single('file'),techCtrl.createTech)
router.get('/',techCtrl.getTechs)
module.exports=router
