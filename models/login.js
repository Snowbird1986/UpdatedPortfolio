module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
    userName: {
      type: DataTypes.STRING,
      isAlpha: true,
      notNull: true,
      len: [2, 20]
    },
    password: {
      type: DataTypes.STRING,
      isAlpha: true,
      notNull: true,
      len: [2, 20]
    }
  });
  Login.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    models.Login.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Login;
};