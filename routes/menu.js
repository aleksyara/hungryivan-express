var express = require('express');
var router = express.Router();
var menuesCtrl = require('../controllers/menues');
 // require the Menu model
//  const Menu = require('../models/menu-db');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get("/menu", function (req, res) {
//   res.render("menu/index", {
//     menuItems: menuDb.getAll(),
//   });
// });
router.get('/', menuesCtrl.show);

module.exports = router;
