const express = require('express');
const fs = require('fs');


const server = express();


server.use('/js', express.static('./www/js'));
server.use('/css', express.static('./www/css'));


server.get('/', (req, res)=>{
    let result = fs.readFileSync('./www/index.html');
    res.end(result);
})

server.get('*', (req, res)=>{
    let result = fs.readFileSync('./www/index.html');
    res.end(result);
})


server.listen(8000, 'localhost', (error)=>{
    if(error){
        console.log('服务器启动失败');
    }else{
        console.log('服务器启动成功');
    }
})