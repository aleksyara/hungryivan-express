// require the Menu model
const Menu = require("../models/menu-db");

module.exports = {
  show,
  new: newMenuItem
};

function show(req, res) {
  res.render("menu/index", {
    taco: Menu.getAll(),
    // // Would like to display the number of the todo within the list
    // todoNum:
    //   Menu.getAll().findIndex((menu) => menu.id === parseInt(req.params.id)) +
    //   1,
  });
}

function newMenuItem(req, res) {
  res.render("menu/new", { title: "Add Menu Item" });
}
