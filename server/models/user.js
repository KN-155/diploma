import bcrypt from 'bcrypt-nodejs';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      tel: DataTypes.STRING,
      avatar: DataTypes.STRING,
    }
  );
  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null,
      );
    }
  });
  User.prototype.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
