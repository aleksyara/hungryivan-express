var express = require("express");
var router = express.Router();
var landingCtrl = require("../controllers/landingPage");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Hungry Ivan" });
// });

router.get("/", landingCtrl.show);

module.exports = router;
