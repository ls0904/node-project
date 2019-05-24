const db = require('../config/db');


const schema = new db.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
    },
    sex:{
        type:Number,
        default:1
    },
    avator:{
      type:String,
      default:'http://localhost:3000/img/pkq.jpg'
    }
});


module.exports = db.model('user',schema);