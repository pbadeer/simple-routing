var express = require('express');
var path    = require('path');
var app     = express();
var http    = require('http').Server(app);
var port    = process.env.PORT || 3000;

// Serve up static content via public folder
app.use(express.static(path.join(__dirname, 'public')));

// Send all other URL requests to index.html
// (this lets angular handle URLs)
app.use('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Launch
http.listen(port, function () {
  console.log('Server is live at localhost:%d', port);
});