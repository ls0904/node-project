const express = require('express');
const path = require('path');
const app = express();


const UserRouter = require('./routes/user');
const stuRouter = require('./routes/stu');

app.set('views',path.resolve(__dirname,'./views'));
app.set('view engine','ejs');


//req.body

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//设置静态资源托管
app.use(express.static(path.resolve(__dirname,'./public')));


//设置所有得请求都加一个请求头

 app.use((req,res,next) =>{
    //响应头设置
    res.set('Access-Control-Allow-Origin', '*');
    // 设置允许前端传递的自定义请求头
    res.set('Access-Control-Allow-Headers', 'access_token');
    next();
 })

app.use('/api',[UserRouter,stuRouter]);
app.listen(3000,() =>{
    console.log('服务器已启动');
});
