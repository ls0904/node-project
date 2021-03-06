const db = require('../config/db');


const schema = new db.Schema({
    username:{
        type:String,
        required:true,
    },    
    password:{
        type:String,
        required:true,
    },
    nickname:String,
    sex:{
        type:Number,
        default:1
    }
});
module.exports = db.model('user',schema);