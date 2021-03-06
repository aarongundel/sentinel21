
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var api = require('./routes/apiRoutes');
var user = require('./routes/user');
var allyssa = require('./routes/email')
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/api/posts', api.posts.list);
app.get('/api/posts/:id', api.posts.show);
app.get('/users', user.list);
app.get('/allyssa', allyssa(io))

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});