const bcrypt = require('bcrypt');
const UserModel = require('../model/uesr');



//查看用户
const findUser = (req,res) =>{
    UserModel.find().then(data =>{
        console.log(data);
        res.send({
            code:0,
            msg:'获取成功',
            data:{
                list:data
            }
        })
    }).catch(err =>{
        console.log(err.messsage);
        res.send({
            code:-1,
            msg:'失败',
        })
    })
}
//添加用户
const addUser = (req,res) =>{
    let name = req.body.name;
    let pwd = req.body.pwd;
    let nickname = req.body.nickname;


    if(!name || !pwd){
        res.send({
            code:-1,
            msg:'用户名或密码不能为空'
        })

        return;
    }
    const user = new UserModel({
        username:name,
        password:pwd,
        nickname:nickname
    })

    user.save().then(() =>{
        res.send({
            code:0,
            messsage:'注册成功'
        })
    }).catch(err =>{
        res.send({
            code:-1,
            messsage:'注册失败'
        })
    })
} 

//修改用户
const putUser = (req,res)=>{
    let id = req.body.id;
    let nickname = req.body.nickname;

    UserModel.updateOne({_id:id},{nickname:nickname}).then(data=>{
        res.send({
            code:0,
             message:'修改成功'
        })
    }).catch(err =>{
        res.send({
            code:'-1',
            message:'修改失败'
        })
    })
}

//删除用户
const delUser = (req,res) =>{
    let id = req.query.id;

    UserModel.deleteOne({_id:id}).then(data =>{
        res.send({
            code:0,
            message:"删除成功"
        })
    }).catch(err =>{
        res.send({
            code:-1,
            msg:'删除失败'
        })
    })
}
module.exports ={
    findUser,
    addUser,
    putUser,
    delUser
}