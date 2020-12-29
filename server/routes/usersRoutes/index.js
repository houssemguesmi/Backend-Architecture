const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var Users = await services.userServices.findAllUsers();
    res.send(Users);
  } catch (error) {
    res.send(error);
  }
});

router.post("/createUser", async (req, res) => {
  try {
    var newUser = await services.userServices.createUser(req.body);
    res.send(newUser);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
