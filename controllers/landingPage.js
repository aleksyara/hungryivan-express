// require the Menu model
const Menu = require("../models/menu-db");

module.exports = {
  show,
};

function show(req, res) {
  res.render("index", {
    taco: Menu.getAll(),
  });
}
