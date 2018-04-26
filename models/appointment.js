'use strict';
module.exports = (sequelize, DataTypes) => {
  var Appointment = sequelize.define('Appointment', {
    timestamp: DataTypes.DATE,
    appointment_date: DataTypes.DATE
  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};
