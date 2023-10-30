var express = require("express");
var router = express.Router();
const commentsCtrl = require("../controllers/comments");

/* GET users listing. */
router.post("/pictures/index", commentsCtrl.create);

module.exports = router;
