const express=require('express')
const cors=require('cors')
const app=express()
const upload=require('./middlewares/multer')

const corsOption={
    origin: '*', // Autorise uniquement cette origine (toutes)
    methods: ['GET', 'POST','PUT','DELETE'], // Autorise uniquement GET et POST
}

app.use(express.json())
app.use(cors(corsOption))
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization',
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET,POST,PUT,DELETE,PATCH,OPTIONS',
	);
	next();
});

app.post('/',upload.single('file'),(req,res)=>{
    console.log('accès serveur')
	console.log(req.file)
	console.log((req.body))
    const reponse={message:(req.body)}
    res.json(reponse)
})

module.exports=app