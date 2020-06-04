module.exports = function(sequelize, DataTypes) {
  let Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Biological",
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
};
