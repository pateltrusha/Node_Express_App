var http=require('http');

var myServer=http.createServer(function(req,res){

res.writeHead(200,{"Content-Type":"text/html"});
res.write("<h1>Hi Welcome</h1>");
res.end();
});

myServer.listen(3000);
console.log("server started....");