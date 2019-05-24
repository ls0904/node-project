const bcrypt = require('bcrypt');
const UserModel = require('../model/uesr');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
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
        //如果登录成功，先生成一个token
        let token = jwt.sign({
            username:data.username,
            id:data._id
        },'MYGOD');
        res.send({
            code:0,
            msg:'登录成功',
            data:{
                token:token,
                userInfo:{
                    username:data.username,
                    avator:data.avator
                }
            }
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
    console.log('131312312')
    let id = req.query.id;
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

/**
 * 用户头像修改
 */
const upload = (req,res) =>{
    // console.log(req.file);
    // res.send('111');
    //1. 将 tmp 目录的文件，移动到 当前项目中的 public 文件夹中，修改一下名字
    // let id = req.body.id;
    let newFileName = new Date().getTime()+'_'+req.file.originalname;
    let newPath = path.resolve(__dirname,'../public/img/',newFileName);
    let data = fs.readFileSync(req.file.path);
    fs.writeFileSync(newPath,data);

    //2.修改数据库
    UserModel.updateOne({_id:req.userId},{avator:`http://localhost:3000/img/${newFileName}`}).then(() =>{
        res.send({
            code:0,
            msg:'ok',
            data:{
                avator:`http://localhost:3000/img/${newFileName}`
            }
        })
    }).catch(err =>{
        console.log(err.message);
        res.send({
            code:-1,
            msg:'失败'
        })
    })

}


module.exports = {
    reg,
    login,
    upDate,
    delet,
    upload
}