var config = require('./index'),
	express = require('express'),
	bodyParser = require('body-parser'),
	switchyard = require('switchyard'),
	path = require('path');

module.exports = function()
{
	var app = express();
	var apiRouter = express.Router();
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static('app/static'))

	app.use(function (req, res, next){
		console.log(req.method, req.originalUrl);
		next();
	});

	switchyard(apiRouter, __dirname+'./../controllers');
	app.use('/', apiRouter)

	return app;
}