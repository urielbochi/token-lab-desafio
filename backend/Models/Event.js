const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Event = sequelize.define(
  "Event",
  {
    title: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    st: {
      type: DataTypes.STRING,
    },
    et: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Event;
