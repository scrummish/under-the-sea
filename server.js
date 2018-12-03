const express = require('express'); 
const app = express();
const port = 3323;

const LoginController = require('./controllers/loginController.js');
app.use('/login/', LoginController);

app.listen(port,()=>{
	console.log('Hello Sergio, I am listening on port ' + port);
})