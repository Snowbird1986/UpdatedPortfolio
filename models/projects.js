module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    projectName: {
      type: DataTypes.STRING,
      isAlpha: true,
      notNull: true,
      len: [2, 20]
    },
    link: {
      type: DataTypes.STRING,
      isAlpha: true
    },
    alt: {
      type: DataTypes.STRING,
      isAlpha: true
    },
    title: {
      type: DataTypes.STRING,
      isAlpha: true
    },
    img: {
      type: DataTypes.STRING,
      isAlpha: true
    }
  });
  Project.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    models.Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Project;
};
