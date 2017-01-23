var express = require('express');
var app = express();
var request = require('request');
var elasticsearch=require('elasticsearch');
var bodyParser = require('body-parser');

app.use('/static', express.static(__dirname + '/src/js'));
app.set('view engine' ,'pug');
app.set('views' , __dirname + '/src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var client = new elasticsearch.Client( {
  host: "http://localhost:9200/"
});


  client.indices.create({
  index: 'react'
},function(err,resp,status) {
  if(err) {
    console.log("table already exists.");
  }
  else {
    console.log("create",resp);
  }
});

app.get('/',function(req,res){
    res.render('index');
})

app.post('/addNote', function(req, res, next) {
  var note = req.body.text;
  console.log(note);
  //add a document to an index
  client.index({
    index:"react",
    type:"es",
    body : {
      "Note":note
    }
  },function(err,resp,status){
      console.log(resp);
      res.send({ status : 200 , note : note });
    });

});

app.get('/notes', function(req, res, next) {
  client.search({
  index : "react",
  type : "es",
  body :{
    query : {

    }
  }
},function(err,resp,status){
  if(err){
    console.log("error",err)
  }
  else{
    console.log("wow" + resp.hits.hits);
    res.send(resp.hits.hits)
  }
});
});


app.listen(3000,function(){
    console.log('listening on port 3000');
})