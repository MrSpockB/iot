module.exports = function(sequelize, DataTypes)
{
	var Usuario = sequelize.define("Usuario" , {
		id: {
			type: DataTypes.INTEGER,
			field: 'id',
			autoIncrement: true,
			primaryKey: true
		},
		nombre: {
			type: DataTypes.STRING,
			field: 'nombre'
		},
		rfid: {
			type: DataTypes.STRING(50),
			field: 'rfid'
		},
		status: {
			type: DataTypes.ENUM('activo', 'inactivo'),
			field: 'status',
			defaultValue: 'activo'
		}
	},{
		classMethods:{
			associate: function(models)
			{
				Usuario.hasMany(models.Log);
			}
		},
		freezeTableName: true,
		tableName: 'usuarios'
	});
	return Usuario;
}