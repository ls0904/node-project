const bcrypt = require('bcrypt');
const UserModel = require('../model/uesr');

//注册用户

const reg = (req,res)=>{
    let body = Object.assign({},req.body,{
        password:bcrypt.hashSync(req.body.password,10)
    })

    //先对用户是否存在做一个判断
    UserModel.findOne({username:req.body.username}).then(data =>{
        if(data){
            res.send({
                code:-1,
                msg:'该用户已存在，请重新输入'
            })
        }else{
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


//修改用户信息
const upDate = (req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    let nickname = req.body.nickname;
    UserModel.updateOne({
        username:username,
        password:bcrypt.hashSync(password,10),
        nickname:nickname}).then(data =>{
        res.send({
            code:0,
            msg:'修改成功'
        })
    }).catch( err =>{
        res.send({
            code:-1,
            msg:'修改失败'
        })
    })
}

//删除用户

const delet= (req,res) =>{
    let id = req.body.id;
    UserModel.deleteOne({_id:id}).then(data =>{
        res.send({
            code:0,
            msg:'删除成功'
        })
    }).catch(err =>{
        res.send({
            code:-1,
            msg:'删除失败'
        })
    })
}


module.exports = {
    reg,
    login,
    upDate,
    delet
}