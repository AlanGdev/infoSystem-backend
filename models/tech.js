const mongoose=require('mongoose')

const techSchema=mongoose.Schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    imageUrl:{type:String,required:false}
})

module.exports=mongoose.model('Tech',techSchema)