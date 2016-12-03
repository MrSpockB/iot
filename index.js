process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./app/config/'),
	db = require('./app/models/'),
	express = require('./app/config/express');

var app = express();

db.sequelize.sync()
.then(function()
{
	app.listen(config.port);
	console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);

	app.get('/', function(req, res)
	{
		res.sendFile(__dirname +'/app/static/index.html');
	});
})
.catch(function (e) 
{
	throw new Error(e);
});
