const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var Administrators = await services.administratorServices.findAllAdministrators();
    res.send(Administrators);
  } catch (error) {
    res.send(error);
  }
});

router.post("/createAdministrator", async (req, res) => {
  try {
    var newAdministrator = await services.administratorServices.createAdministrator(
      req.body
    );
    res.send(newAdministrator);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
