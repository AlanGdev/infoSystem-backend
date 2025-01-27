const Car=require('../models/car')

exports.createCar=(req,res,next)=>{
    console.log('accès serveur')
    const imageUrl=`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    console.log(req.body)
    const car=new Car(
        {...req.body,imageUrl:imageUrl}
    )
    car.save()
    res.json(req.body)

    console.log(req.body)
}

exports.getCars=(req,res,next)=>{
    console.log('getCars')
    Car.find()
    .then(cars=>{
        console.log(cars)
        res.status(200).json(cars)})
    .catch(error=>res.status(400).json(error))
}