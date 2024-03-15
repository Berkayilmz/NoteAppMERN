const express=require('express');
const app=express();
require('dotenv').config();
const noteRoute=require('./routes/notlar');
const mongoose=require('mongoose');

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Veritabanı bağlandı!');
        app.listen(process.env.PORT,()=>{
            console.log(`${process.env.PORT} port dinleniyor.`);
        });
    })
    .catch(err=>{
        console.log(err);
    })




app.use('/api/notes',noteRoute);

// app.get('/',(req,res)=>{
//     res.json({mesaj: "Express App"});
// })