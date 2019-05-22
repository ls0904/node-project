const express = require('express');
const UserModel = require('../model/uesr');
const router = express.Router();

router.get('/',(req,res) =>{
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
})
module.exports = router;