var express = require('express');
var app = express();

app.listen(3000);
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index');
});