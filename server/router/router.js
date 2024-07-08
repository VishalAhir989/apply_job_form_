const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.post("/",controllers.home);
router.get("/",controllers.apply);

module.exports = router; 