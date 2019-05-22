 var http = require('http');
 var server = http.createServer();
 var fs = require('fs');

 var msg = [{name:'brandy',content:'今天天气真好'},{name:'hu',content:'今天糟透了'},{name:'boqiang',content:'今天天气是挺好的'}];

 server.on('request',function(req,res){
   var reqUrl = req.url;
   var html = '';
   if(reqUrl=='/'){
    fs.readFile('./view/index.html','utf8',(err,data)=>{
        if(err) console.log(err);

       msg.forEach( function(item){
        html+=`
        <li>${item.name}说：${item.content}</li>
        `
       });
       var data = data.replace('留言表：',html);
       res.setHeader('Content-Type','text/html;charset=utf-8');
       res.write(data);
       res.end();
    })
   }
 })

 server.listen(3000,()=>{
     console.log('Listening to port 3000');
 })