var http = require('http');

var server = http.createServer(function(req,res){
	console.log("Hey someone is here");
	res.write("Hi hackavan");
	res.end();
});

server.listen(3000);