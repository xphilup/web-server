
var express = require('express');
var app = express();
var PORT = 3000

var middleware = {
	requiredAuthentication: function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		// var cdate = new Date().toString();
		console.log('Request: ' + new Date().toString() + ' ' +req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

// app.use(middleware.requiredAuthentication);

app.get('/about', middleware.requiredAuthentication, function(req, res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));


// open a route
app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT);
});



