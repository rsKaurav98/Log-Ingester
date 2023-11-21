const express = require("express");
const { getAllLogs } = require("../controller/logController");

const router = express.Router();

router.route("/log").get(getAllLogs);

module.exports = router;