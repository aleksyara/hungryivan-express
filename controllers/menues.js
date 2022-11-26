// require the Menu model
const Menu = require("../models/menu-db");

module.exports = {
  index,
  //show,
  new: newMenuItem,
  create,
};

function index(req, res) {
  Menu.find({}, function (err, menueItems) {
    res.render("menu/index", { title: "All Menu", menueItems });
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
  

  // convert frozen's checkbox of nothing or "on" to boolean true value. Exmp.: !!'' -> gives false
  req.body.frozen = !!req.body.frozen;
  //console.log(req.body, " in create route");
  // a and b makes record in array
  // a) remove whitespace next to commas
  req.body.stuffing = req.body.stuffing.replace(/\s*,\s*/g, ",");
  // b) split if it's not an empty string
  if (req.body.stuffing) req.body.stuffing = req.body.stuffing.split(",");

  Menu.create(req.body, function (err, createdMenuItem) {    
    console.log("createdMenuItem " + createdMenuItem);
    //if error
    if (err) return res.render("menu/new", { title: "Add Menu Item" });
    //repond to the client, after we get the reponse from the db
    res.redirect('/menu');
  });

  /*
//let value = {
// category: req.body.category,
//  stuffing: req.body.stuffing,
//  price: req.body.price
//}

let menu = new Menu(req.body);
  // menu = Object.assign(menu, value)
  menu.save(function (err, result) {
    //console.log("menu 1" + menu);
    // one way to handle errors
    if (err) {
      console.log("err " + err)
      res.render("menu/new")
    } else {
      console.log("result " + result)
    }
    //return res.render("menu/new");
    //console.log("menu 2" + menu);
    // for now, redirect right back to new.ejs
    res.redirect("menu");
  });
*/


}
