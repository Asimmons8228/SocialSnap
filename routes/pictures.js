var express = require("express");
var router = express.Router();
const picturesCtrl = require("../controllers/pictures");

router.get("/", picturesCtrl.index);

router.post("/", picturesCtrl.create);

module.exports = router;
