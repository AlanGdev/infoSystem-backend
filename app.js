const express=require('express')
const cors=require('cors')
const upload=require('./middlewares/multer')
const path=require('path')
const techRouter=require('./routes/tech')
const carRouter=require('./routes/car')
const mongoose = require('mongoose');
const app=express()

// Connexion à MongoDB
mongoose.connect('mongodb+srv://alan:nalag@cluster0.krjmg.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(() => console.log('Connexion à MongoDB réussie'))
.catch((err) => console.error('Erreur de connexion à MongoDB :', err));

app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')));
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

app.use('/techs',techRouter)
app.use('/cars',carRouter)

module.exports=app