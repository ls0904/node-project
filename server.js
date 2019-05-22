const express = require('express');
const path = require('path');
const app = express();


const UserRouter = require('./routes/user');

app.set('views',path.resolve(__dirname,'./views'));
app.set('view engine','ejs');


//req.body

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//设置静态资源托管
app.use(express.static(path.resolve(__dirname,'./public')));


app.use('/api',UserRouter);
app.listen(3000,() =>{
    console.log('服务器已启动');
});
