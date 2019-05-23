const express = require('express');

const stuCtrl = require('../controller/stuCtrl');
const router = express.Router();

router.route('/stu')
.post(stuCtrl.add)
.get(stuCtrl.find)

module.exports = router;