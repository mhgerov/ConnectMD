'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
			}
		},
		password_hash: DataTypes.STRING,
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
		date_of_birth: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: true
			}
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		care_plan: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
	}, {});
	User.associate = function(models) {
		// associations can be defined here
		User.hasMany(models.Appointment);
	};
	return User;
};
