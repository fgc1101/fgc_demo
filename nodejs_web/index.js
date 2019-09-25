/**
 * Created by Administrator on 2019/9/25.
 */

/***
 * 成绩查询功能
  */
const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const scoreData = require('./data.json');

console.log(path.join(__dirname));
http.createServer((req,res)=>{
    //查询成绩的入口地址
    if(req.url.startsWith('/query') && req.method == 'GET'){
        fs.readFile(path.join(__dirname,'view','query.html'),'utf8',(err,content)=>{
            if(err){
                res.writeHead(500,{
                    'Content-Type' : 'text/html;charset=utf8'
                })
                res.end('服务器内部错误，请与管理员联系');
            }
            res.end(content);
        })
    }else if(req.url.startsWith('/score') && req.method == 'POST'){
        //获取成绩的入口
        let pdata = '';
        req.on('data',(chunk)=>{

            pdata += chunk;
        })

        req.on('end',()=>{
            console.log(pdata);
            let obj = querystring.parse(pdata); // 字符串转成对象
            let result = scoreData[obj.code];

            fs.readFile(path.join(__dirname,'view','score.html'),'utf8',(err,content)=>{
                if(err){
                    res.writeHead(500,{
                        'Content-Type' : 'text/html;charset=utf8'
                    })
                    res.end('服务器内部错误，请与管理员联系');
                }
                var template = require('art-template');
                var html = template(__dirname + '/view/score.html', result);
                content = content.replace('$$yuwen$$',result.yuwen);
                content = content.replace('$$shuxue$$',result.shuxue);
                content = content.replace('$$yingyu$$',result.yingyu);
                content = content.replace('$$qita$$',result.qita);

                res.end(html);
            })
        });
    }


}).listen(3000,()=>{
    console.log('http running....');
})