const bcrypt = require('bcrypt');
const UserModel = require('../model/uesr');

//注册用户

const reg = (req,res)=>{
    let body = Object.assign({},req.body,{
        password:bcrypt.hashSync(req.body.password,10)
    })
    let user = new UserModel(body);
    user.save().then(() =>{
        res.send({
            code:0,
            msg:'ok'
        })
    }).catch(() =>{
        console.log(err);
        res.send({
            code:-1,
            msg:'err'
        })
    })
}

// 登录用户
const login = (req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    UserModel.findOne({username:username}).then(data =>{
        if(!data){
            res.send({ 
                code:-1,
                msg:'用户名错误'
            })
            return;
        }

    let pwd = data.password;
    let isOk = bcrypt.compareSync(password,pwd);
    if(isOk){
        res.send({
            code:0,
            msg:'登录成功'
        })
    }else{
        res.send({
            code:-1,
            msg:'密码错误'
        })
    } 
 })
}
module.exports = {
    reg,
    login
}