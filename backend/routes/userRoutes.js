const express = require("express");
const { createResume, getResume, getPdffile } = require("../controllers/userController");
const router = express.Router();

router.post("/add", createResume);
router.post("/getPdffile", getPdffile);
router.get("/getResume", getResume);

module.exports = router;
