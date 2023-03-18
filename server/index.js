const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');

app.listen('5000',function(err)
{
    if(err) console.log(err);
    else console.log('listening on port 5000');
});