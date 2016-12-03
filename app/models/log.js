module.exports = function(sequelize, DataTypes)
{
	var Log = sequelize.define("Log" , {
		id: {
			type: DataTypes.INTEGER,
			field: 'id',
			autoIncrement: true,
			primaryKey: true
		},
		fecha: {
			type: DataTypes.DATE,
			field: 'fecha',
			defaultValue: DataTypes.NOW
		},
		UsuarioId:
		{
			type: DataTypes.INTEGER,
			field: 'UsuarioId',
		}
	},{
		classMethods: {
			associate: function(models) {
				Log.belongsTo(models.Usuario)
			}
		},
		freezeTableName: true,
		tableName: 'logs'
	});
	return Log;
}