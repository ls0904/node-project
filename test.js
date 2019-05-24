const jwt = require('jsonwebtoken');

const token = jwt.sign({
  name:'张三',
  age:18,
  exp:Math.floor(Date.now() / 1000)+(30),
},'tet');
  console.log(token);
  

jwt.verify(token,'tet',(err,data) =>{
  if(err){
    console.log(err.message);
  }else{
    console.log(data);
  }
})