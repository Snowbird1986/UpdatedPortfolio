module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      isAlpha: true,
      notNull: true,
      len: [2, 20]
    },
    lastName: {
      type: DataTypes.STRING,
      isAlpha: true,
      len: [2, 20]
    },
    phoneNumber: {
      type: DataTypes.STRING,
      len: [7, 10]
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      notNull: true
    },
    address: {
      type: DataTypes.STRING,
      len: [2, 30]
    },
    city: {
      type: DataTypes.STRING,
      len: [2, 20]
    },
    state: {
      type: DataTypes.STRING,
      len: [2, 15]
    },
    zip: {
      type: DataTypes.INTEGER,
      isNumeric: true
    }
  });
  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    models.User.hasMany(models.Project, {
      onDelete: "cascade"
    });
  };
  return User;
};
