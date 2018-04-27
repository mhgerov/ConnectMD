'use strict';
module.exports = function(sequelize, DataTypes) {
	var Provider = sequelize.define("Provider", {
		npi: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			validate: {
				notEmpty: true,
				isNumerica: true,
				len: [10,10],
			}
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		specialty: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	});

	Provider.associate = function(models) {
		// associations can be defined here
		Provider.hasMany(models.Appointment);
	};
	return Provider;
};
