var bcrypt = require('bcrypt');
const saltRounds = 10;

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
	}, {indexes:[{fields:['email']}]});
	User.associate = function(models) {
		// associations can be defined here
		User.hasMany(models.Appointment);
	};
	User.hook('beforeCreate', (user,options) => {
		return bcrypt.hash(user.password_hash, saltRounds).then(function (hash) {
			console.log('hashing');
			user.password_hash = hash;
		});
	});
		
	return User;
};
