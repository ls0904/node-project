const UserCtrl =require('../controller/userCtrl');
const express = require('express');
const router = express.Router();

router.post('/reg',UserCtrl.reg);
router.post('/login',UserCtrl.login);
router.post('/upDate',UserCtrl.upDate);
router.post('/delet',UserCtrl.delet);

module.exports = router;