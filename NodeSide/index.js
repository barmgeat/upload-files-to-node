const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const upload = require('express-fileupload');

app.use(bodyParser.json());

//now use express file upload : 
app.use(upload());

//use our router as middleware : 
const userRouter = require('./routes/users');
app.use('/upload', userRouter);

app.listen(3000, () =>{
    console.log('server running on port: 3000');
});
