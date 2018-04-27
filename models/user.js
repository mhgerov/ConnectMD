'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true,
				notNull: true,
			}
		},
		password_hash: DataTypes.STRING,
		first_name: {
			type: DataTypes.STRING,
			validate: {
				notNull: true,
				notEmpty: true
			}
		},
		last_name: {
			type: DataTypes.STRING,
			validate: {
				notNull: true,
				notEmpty: true
			}
		},
		date_of_birth: {
			type: DataTypes.DATE,
			validate: {
				notNull: true,
				isDate: true
			}
		},
		address: {
			type: DataTypes.STRING,
			validate: {
				notNull: true,
				notEmpty: true,
			}
		},
		care_plan: {
			type: DataTypes.STRING,
			validate: {
				notNull: true,
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
