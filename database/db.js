const mongoose = require('mongoose');
// process.env.MONGODB_URI is for Heroku
const mongoUri =  process.env.MONGODB_URI ||  'mongodb://localhost:27017/tutoring';

mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
	console.log('Database connected');
})

mongoose.connection.on('disconnected', () => {
	console.log('Database disconnected');
})

mongoose.connection.on('error', () => {
	console.log('There was an error connecting', error);
})