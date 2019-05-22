const express = require('express');
const UserModel = require('../model/uesr');
const router = express.Router();
const UserCtrl = require('./controller/UserCtrl');


router.route('/user')
.get(UserCtrl)
.post(addUser)
.put(putUser)
.delete(delUser)




// router.get('/',(req,res) =>{
//     UserModel.find().then(data =>{
//         console.log(data);
//         res.send({
//             code:0,
//             msg:'获取成功',
//             data:{
//                 list:data
//             }
//         })
//     }).catch(err =>{
//         console.log(err.messsage);
//         res.send({
//             code:-1,
//             msg:'失败',
//         })
//     })
// })

// // 新增用户
// router.post('/add',(req,res) =>{
//     let name = req.body.name;
//     let pwd = req.body.pwd;
//     let nickname = req.body.nickname;


//     if(!name || !pwd){
//         res.send({
//             code:-1,
//             msg:'用户名或密码不能为空'
//         })

//         return;
//     }
//     const user = new UserModel({
//         username:name,
//         password:pwd,
//         nickname:nickname
//     })

//     user.save().then(() =>{
//         res.send({
//             code:0,
//             messsage:'注册成功'
//         })
//     }).catch(err =>{
//         res.send({
//             code:-1,
//             messsage:'注册失败'
//         })
//     })
// })

// //更改用户

// router.post('/upDate',(req,res)=>{
//     let id = req.body.id;
//     let nickname = req.body.nickname;

//     UserModel.updateOne({_id:id},{nickname:nickname}).then(data=>{
//         res.send({
//             code:0,
//              message:'修改成功'
//         })
//     }).catch(err =>{
//         res.send({
//             code:'-1',
//             message:'修改失败'
//         })
//     })
// })

// //删除用户
// router.get('/del',(req,res) =>{
//     let id = req.query.id;

//     UserModel.deleteOne({_id:id}).then(data =>{
//         res.send({
//             code:0,
//             message:"删除成功"
//         })
//     }).catch(err =>{
//         res.send({
//             code:-1,
//             msg:'删除失败'
//         })
//     })
// })



module.exports = router;