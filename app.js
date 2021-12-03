const express = require('express');
const viewRouter = require('./routes/views')

const app = express()

// 挂载服务
app.engine('html', require('express-art-template'))

// 挂载静态资源 (用到静态路径最好是用绝对路径)
app.use('/public', express.static(__dirname + '/public'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))

// 挂载路由表
app.use('/views', viewRouter)

app.listen(3000, () => console.log('server has running at port 3000!'))