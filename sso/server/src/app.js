const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const {PORT}=require('./config/serverConfig');

const app=express();

app.use(cors());
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})