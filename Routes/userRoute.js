const express = require("express");
const { readFile } = require("xlsx");
const router = express.Router();
const User = require("../Schema/userModel");
router.post("/user", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      password: req.body.password,
      email: req.body.email,
    }).then((user) => {
      res.json(user);
    });
    // res.json(user);
    // res.send(user);
    console.log(user);
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
});
module.exports = router;
