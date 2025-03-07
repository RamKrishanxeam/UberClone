const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post("register", [body("email").isEmail().withMessage("Invalid email"),body('fullnam')]);

module.exports = router;
