var db = require('./../models/');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			db.Usuario.findAll().then(function (personas) {
				res.json(personas);
			});
		}
	},
	":userId":
	{
		get: function(req, res, next)
		{
			db.Usuario.findAll({
				where:{
					id: req.params.userId
				},
				include:[{
					model: db.Log
				}]
			})
			.then(function(persona){
				res.json(persona);
			})
			// .catch(function(error){
			// 	res.json({msg: "Error retrieving user", err: error});
			// })
		}
	}
}