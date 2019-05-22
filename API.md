# 学生信息管理系统
以下接口的访问Ulr地址为：http://localhsot:3000
## 1、注册

  - 请求方式：`POST`
  - 访问路径：`api/reg`
  - 请求参数：`body`

 | 参数名字 | 参数类型 | 是否必须 | 说明 |
 | ---- | ---- | ---- | ---- |
 | username | String | Y | 用户名 |
 | password | String | Y | 密码 |
 | cinkname | String | N | 昵称 |
 | sex | Number | N | 性别 | 

 - 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok'
}
```

## 2、登录

- 请求地址：`/api/login`
- 请求方式：`POST`
- 请求参数：`body`

| 参数名字 | 参数类型 | 是否必须 | 说明 |
| --- | --- |--- | --- |
| username | String | Y | 用户名 |
| password | String | Y | 密码 |

- 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok'
}
```
