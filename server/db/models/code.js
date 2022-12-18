const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Code extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Code.init({
    code: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Code',
  });
  return Code;
};
