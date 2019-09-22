const router = require('express').Router();



//path to upload file with post method : 
router.post('/file', (req, res) => {
    // check if the request has files inside =>
    if(req.files){
        // to save the file from the request where is : 
        // req.files.file file here is the name of the file in the post request.. 
        const file = req.files.file;

        // extract the file name: 
        const fileName = file.name ;

        //save the file on the server on path -> ./uploads/files
        file.mv('./uploads/files/'+fileName, (err) =>{
            if(err){
                console.log('cant handel the file from the request');
                res.status(400).send('cant handel the file from the request');
                return;
            }
            //if no errors send response the file successfully saved on the server =>
            res.status(201).send('file saved success! ');
        });

    }else{
        console.log('request without files');
        res.status(400).send('no files founded');
    }
});

module.exports = router ;

/**
 * now lets test the server side using post man ..
 * good job now the server is ready to accept file requests form the clients 
 * lets send a form from the php side to our server ...
 */