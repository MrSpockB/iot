var Log = require('./../models/log');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			Log.findAll().then(function (logs) {
				logs.forEach(function (campo){
					console.log(campo.dataValue);
				});
				res.json(logs);
			});
		}
	}
}