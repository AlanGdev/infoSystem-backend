exports.createTech=(req,res,next)=>{
    console.log('accès serveur')
	console.log(req.file)
    const imageUrl=`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    console.log(imageUrl)
	console.log(req.body)
    const reponse={message:(req.body)}
    res.json(reponse)}

