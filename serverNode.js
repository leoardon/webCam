var app = require("express").createServer();

app.listen(8080);
console.log("server is listenning on localhost:8080");

app.get('/*.(js|css|html)', function(req, res){
	res.sendfile("."+req.url);
});

app.get('/', function(req, res){
        res.sendfile(__dirname+'/index.html');
});
