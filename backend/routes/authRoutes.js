const express = require("express");
const router = express.Router();
const cors = require("cors");

const authController = require("../controller/authController");
const authGuard = require("../middleware/auth");
const validate = require("../utils/validate");
const middleware = require('../middleware/auth')

router.post("/register", cors(), validate("register"), authController.register);
router.post("/login", cors(), validate("login"), authController.login);
router.get("/user", cors(), authGuard, authController.getUser);
router.get("/logout", cors(), authGuard, authController.logout);

module.exports = router;
