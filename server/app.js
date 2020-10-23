var express = require('express')
var app = express()
const path = require('path')
const fs = require('fs')

const GLOBAL_PATH = {
    pages: path.join('../src/pages'),
}

var pageList = []

function readFileList(path, filesList) {
    var files = fs.readdirSync(path);
    files.forEach(function(itm) {
        var stat = fs.statSync(path + '/' + itm);

        if (stat.isDirectory()) {
            //递归读取文件
            readFileList(path + '/' + itm + "/", filesList)
        } else {
            var obj = {}; //定义一个对象存放文件的路径和名字
            obj.path = path; //路径
            obj.filename = itm //名字
            filesList.push(obj);
        }

    })

}

readFileList(GLOBAL_PATH.pages, pageList)

// console.log(filesList)



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world')
})



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//获取模板列表
app.get('/model/list', function(req, res) {
    res.json({ list: [] })
})

//获取页面列表
app.get('/get/pages', function(req, res) {
    res.json({ list: pageList })
})

app.post('/mkdir', function(req, res) {
    // res.send('Got a POST request')
    console.log(req.body)
    res.json({ user: 'tobi' })
})



app.listen(3001) //监听3000端口，默认localhost: 127.0.0.1 || 0.0.0.0

console.log('服务已启动')