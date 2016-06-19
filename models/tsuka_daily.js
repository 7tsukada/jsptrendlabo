module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tsuka_Daily', {
          date: DataTypes.DATE,
          content: DataTypes.STRING
      });
}
