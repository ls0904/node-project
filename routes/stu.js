const express = require('express');
const auth = require('../controller/auth');
const stuCtrl = require('../controller/stuCtrl');
const router = express.Router();

router.route('/stu')
.post(auth,stuCtrl.add)
.get(auth,stuCtrl.find)
.put(auth,stuCtrl.update)

module.exports = router;