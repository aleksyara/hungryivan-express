// require the Menu model
const Menu = require("../models/menu-db");

module.exports = {
  index,
  //show,
  new: newMenuItem,
  create,
};

function index(req, res) {
  Menu.find({}, function(err, menue){
    res.render('menu/index', {title: 'All Menu', menue});
  });
}
    

// function show(req, res) {
//   res.render("menu/index", {
//     taco: Menu.getAll(),
//     // // Would like to display the number of the todo within the list
//     // todoNum:
//     //   Menu.getAll().findIndex((menu) => menu.id === parseInt(req.params.id)) +
//     //   1,
//   });
// }






//Add new Menu Item
//Step 1 Display Adding Form
function newMenuItem(req, res) {
  res.render("menu/new", { title: "Add Menu Item" });
}
//Step 2 Creare a new record on the DB
function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ",");
  // split if it's not an empty string
  // if (req.body.cast) req.body.cast = req.body.cast.split(",");
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  const menu = new Menu(req.body);
  menu.save(function (err) {
    // one way to handle errors
    if (err) return res.render("menu/new");
    console.log(menu);
    // for now, redirect right back to new.ejs
    res.redirect("/menu/new");
  });
}
