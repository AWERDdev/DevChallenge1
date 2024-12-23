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
            app.get('/requestlink', async(req,res)=>{
                try{
                    const URL = req.query.value;
                    if (!URL) {
                        return res.status(400).json({ error: 'URL parameter is required' });
                    }
                    const QRCodeGenURL = `https://api.qrserver.com/v1/create-qr-code/?size=${qrCodesize}&data=${URL}`;
                    res.json(QRCodeGenURL);
                    console.log('Generated URL:', QRCodeGenURL);
                } catch(error){
                    console.error(`Failed to fetch URL: ${error}`);
                    res.status(500).json({ error: 'Server error' });
                }
            });
            
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`)
    })
    // module.exports = app