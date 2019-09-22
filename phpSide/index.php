<?php 
    
    // first i will copy some file to the our php dir
    /**
     * now lets create our file inside php
     * 
     */

    // get the file path and create the file with curl .. 
    $filePath = realpath('img1.jpg');
    $file = curl_file_create($filePath);

    //create the post fields array : 
    $fields = array(
        'extra-data' => 'if you need to send extra data right here', 
        'file' => $file
    );

    //setup the curl url to connect:
    $url = 'http://localhost:3000/upload/file';
    
    //create the curl connection
    $ch = curl_init($url);

    // create curl connection options array => 
    $options = array(
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $fields
    );

    curl_setopt_array($ch, $options);

    // handel the server response 
    $result = curl_exec($ch);
    //extract the request information ...
    $info = curl_getinfo($ch);
    $responseCode = $info['http_code'];
    //close the connection
    curl_close($ch);

    echo($result);


    // now lets clean up our dir in the Node server and refresh the php page to send the photo 
    /**
     * we don't have any images in the server now lets refresh php page ...
     * 
     * every thing works fine as expected and the file was uploaded to the server successfully 
     */
    


?>