const Tech=require('../models/tech')

exports.createTech=(req,res,next)=>{
    console.log('accès serveur')
    const imageUrl=`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    console.log(req.body)
    const tech=new Tech(
        {...req.body,imageUrl:imageUrl}
    )
    tech.save()
    res.json(req.body)

    console.log(req.body)
	console.log(req.body)
}

exports.getTechs=(req,res,next)=>{
    console.log('getTechs')
    Tech.find()
    .then(techs=>{
        console.log(techs)
        res.status(200).json(techs)})
    .catch(error=>res.status(400).json(error))
}