const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://adityasuman990:adityasuman@cluster0.9e7xbmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
{useNewUrlParser : true, useUnifiedTopology: true, Family:4})
.then(()=>{console.log("Connected to MongoDB");}).catch((e)=>{ console.log(e);});



// const Schema = mongoose.Schema;
