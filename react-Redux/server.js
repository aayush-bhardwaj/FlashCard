var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/src/js'));
app.set('view engine' ,'pug');
app.set('views' , __dirname + '/src/views');

app.get('*',function(req,res){
    res.render('index');
})

app.listen(3000,function(){
    console.log('listening on port 3000');
})