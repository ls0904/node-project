const db = require('../config/db');


const schema = new db.Schema({
    usrname:String,
    password:String,
    nickname:String,
},{collection:'user'});


module.exports = db.model('user',schema);