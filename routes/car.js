express=require('express')
const multer=require('../middlewares/multer')
const carCtrl=require('../controllers/car')

const router=express.Router()

router.post('/newcar',multer.single('file'),carCtrl.createCar)
router.get('/',carCtrl.getCars)
module.exports=router
