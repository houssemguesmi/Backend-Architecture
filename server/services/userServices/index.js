const Users = require("../../../database/models/user");

module.exports = {
  async findAllUsers() {
    return Users.find({});
  },
  async createUser(user) {
    return Users.create(user);
  },
};
