const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const QRCodeGenURL = 'https://goqr.me/api/';

app.get('/requestlink',(req,res)=>{

 const URL = req.query.value
 console.log(URL)
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})