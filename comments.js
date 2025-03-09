// Create web server 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());
var fs = require('fs');
var path = require('path');

var comments = require('./comments.json');

app.get('/comments', function (req, res) {
    res.json(comments);
});

app.post('/comments', function (req, res) {
    comments.push(req.body);
    fs.writeFileSync(path.join(__dirname, 'comments.json'), JSON.stringify(comments));
    res.json(req.body);
});

app.listen(3001, function () {
    console.log('Server is running on http://localhost:3001');
});