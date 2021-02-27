const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('combined'))

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/style.css', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/von.png', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'von.png'));
});

app.get('/article1', function(req,res){
  res.sendFile(path.join(__dirname, 'ui/Article', 'article1.html'));
});
app.get('/article2', function(req,res){
  res.send("2");
});
app.get('/article3', function(req,res){
  res.send("3");
});
const port = 8080;
app.listen(8080, function(){
  console.log(`listening on port ${port}!`);
});
