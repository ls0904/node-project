const db = require('../config/db');

const schema = new db.Schema({
  name:{
    type:String,
    required: true
  },
  age:{
    type:Number,
    default:20
  },
  sex:{
    type:String,
    default:1
  }
})

module.exports = db.model('student',schema);