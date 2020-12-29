const Administrators = require("../../../database/models/administrator");

module.exports = {
  async findAllAdministrators() {
    return Administrators.find({});
  },
  async createAdministrator(administrator) {
    return Administrators.create(administrator);
  },
};
