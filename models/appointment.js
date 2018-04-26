module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    NPINumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  // this will hold the place for "USER ID" 
  Appointment.associate = function(models) {
    // We're saying that Appointment should belong to an User
    // An Appointment can't be created without an User due to the foreign key constraint
    Appointment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // this will hold the place for "NPI key"
  Appointment.associate = function(models) {
    // We're saying that Appointment should belong to an Provider
    // An Appointment can't be created without an Provider due to the foreign key constraint
    Appointment.belongsTo(models.Provider, {
      foreignKey: {
        onDelete: "CASCADE",
        allowNull: false
      }
    });
  };

  return Appointment;
};
