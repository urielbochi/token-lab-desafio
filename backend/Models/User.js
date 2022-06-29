const { DataTypes } = require('sequelize');
const sequelize = require('./connection');
const events = require('./Event')

const User = sequelize.define('User', {
  name: {
      type: DataTypes.STRING 
  },
  email: {
      type: DataTypes.STRING 
  },
  password: {
      type: DataTypes.STRING 
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}); 

// User.hasMany(events)

module.exports = User;
