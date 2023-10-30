var express = require("express");
var router = express.Router();
const picturesCtrl = require("../controllers/pictures");

router.get("/", picturesCtrl.index);

router.get("/new", picturesCtrl.new);

router.post("/", picturesCtrl.create);

module.exports = router;
