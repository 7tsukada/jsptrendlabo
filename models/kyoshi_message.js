module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KyoshiMessage', {
          message: DataTypes.STRING,
          post: DataTypes.DATE
      });
}
