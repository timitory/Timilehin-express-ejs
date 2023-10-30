const express =require('express');
//const ejs=require('ejs');

const app = express();

app.set('view engine','ejs');
//app.use(express.static('./public'))

app.set('views', './public')
app.use('/',(req,res,next)=>{
    const date=new Date();
    const hour=date.getHours();
    const day=date.getDay();

    if(day>=1 && day<=5 && hour>=7 && hour<=17){
        console.log('You arrived at our working ours')
        //res.render('index',{message:'We just viewed the resource'})
        next()
    }
    else{
        res.status(403).send('WE ARE CLOSED FOR THE DAY.')
    }
})

app.get('/',(req,res)=>{
    res.render('index',{message:'The request was received at our working hours'})
})
app.listen(5000,(req,res)=>{
    console.log('server running on port 5000.....')
})