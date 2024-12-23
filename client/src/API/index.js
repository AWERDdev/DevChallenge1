    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3500;
    const cors = require('cors');


    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));


    const qrWidth = '180';
    const qrCodesize= `${qrWidth}X${qrWidth}` 

    
    app.get('/',(req,res)=>{
        res.json({message:'hello world'})
            })
    app.get('/requestlink',(req,res)=>{
        const URL = req.query.value
        const QRCodeGenURL = `https://api.qrserver.com/v1/create-qr-code/?size=${qrCodesize}&data=${URL} `;
        res.json(QRCodeGenURL);
        // console.log(URL)
    });
    // app.listen(port,()=>{
    //     console.log(`server is running on http://localhost:${port}`)
    // })
    module.exports = app