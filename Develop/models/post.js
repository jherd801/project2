module.exports = function(sequelize, DataTypes) {
  const Hazards = sequelize.define("Hazards", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Biological"
    },
    severity: {
      type: DataTypes.STRING,
      defaultValue: "Low"
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    actionRequired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Hazards;
};
