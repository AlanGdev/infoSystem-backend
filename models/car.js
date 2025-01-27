const mongoose=require('mongoose')

const carSchema=mongoose.Schema({
    marque:{type:String,required:true},
    model:{type:String,required:true},
    immatriculation:{type:String,required:true},
    initialDate:{type:Date,required:true},
    finalDate:{type:Date,required:true},
    affectation:{type:String,required:true},
    imageUrl:{type:String,required:false}
})

module.exports=mongoose.model('Car',carSchema)