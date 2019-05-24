// 校验token的中间件
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // 1. 得到前端传递过来的token, req.get 请求头中拿数据
  let token = req.get('access_token');
  if (!token) {
    // 如果token不存在
    res.send({
      code: -1,
      msg: 'token不存在'
    })
  } else {
    // token存在，验证其有效性
    jwt.verify(token, 'MYGOD', (err, data) => {
      if (err) {
        // token有问题
        res.send({
          code: -1,
          msg: err.message
        })
      } else {
        // token没问题，该请求是可信任的。
        console.log(data);
        req.userId = data.id;    
        next();
      }
    })
  }
}