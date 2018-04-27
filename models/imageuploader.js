'use strict';
module.exports = (sequelize, DataTypes) => {
  var imageUploader = sequelize.define('imageUploader', {
    issueNo: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  imageUploader.associate = function(models) {
    // associations can be defined here
  };
  return imageUploader;
};
