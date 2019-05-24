const UserCtrl =require('../controller/userCtrl');
const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');

//1、引入multer模块
const multer = require('multer');
//2、设置临时文件的目录
const upload = multer({dest:'G:/iphone Train/ls 3stage/day04/tmp'})


router.post('/reg',UserCtrl.reg);
router.post('/login',UserCtrl.login);
router.post('/upDate',UserCtrl.upDate);
router.get('/delet',UserCtrl.delet);
router.post('/user/upload',upload.single('avator'),UserCtrl.upload);

module.exports = router;