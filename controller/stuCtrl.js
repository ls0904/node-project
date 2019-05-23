const StuModel  = require('../model/stu');

//新增学生

const add = (req,res) =>{
  let name = req.body.name;

  StuModel.findOne({name:name}).then(data =>{
    if(data){
      res.send({
        code:-1,
        msg:"该学生已存在，请重新输入"
      })
    }else{
      let student = new StuModel(req.body);

      student.save().then( ()=>{
        res.send({
          code:0,
          msg:"新增成功"
        })
      }).catch( err =>{
        console.log(err);
        
        res.send({
          code:-1,
          msg:"新增失败"
        })
      })
    }
  })
}


//学生分页查询
const find = (req,res) =>{
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 7;
  let name = req.query.name;


  StuModel.find({name: new RegExp(name)}).count().then(num =>{
    let totalPage =Math.ceil(num /pageSize);

    StuModel.find({name: new RegExp(name)}).skip(pageSize * (pageNum -1)).limit(pageSize).then(data =>{
      res.send({
        code:0,
        msg:'查询成功',
        data:{
          list:data,
          totalPage
        }
      })
    }).catch(err =>{
      console.log(err.message);
      res.send({
        code:-1,
        msg:'err'
      })
    })
  })
}


module.exports = {
  add,
  find
}