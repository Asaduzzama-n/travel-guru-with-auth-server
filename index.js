const express = require('express');
const cors = require('cors');
const app = express();
const prot = process.env.PORT || 5000;

app.use(cors());
const destinations = require('./data/data.json');


app.get('/',(req,res)=>{
    res.send(destinations);
})

app.get('/destination/:id',(req,res)=>{
    const id = req.params.id;
    const destination = destinations.find(d =>d.id+"" === id );
    res.send(destination);
})




app.listen(prot,()=>{
    console.log("SERVER IS RUNNING");
})