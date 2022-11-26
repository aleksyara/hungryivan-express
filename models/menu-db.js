const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  category: {
    type: String,
    required: true
    //enum: ["Manty", "Laghman", "Plov", "Tvorog", "Manty Fusion"],
  },
  stuffing: [String],
  frozen: { type: Boolean, default: false },
  price: Number,
  //frozen: Boolean,
  pkgSize: Number,
});

// const menuItems = [
//   {
//     menuItem: "manty",
//     type: "Classic",
//     meat: "beef",
//     frozen: true,
//     price: 25,
//     size: 2,
//   },
//   {
//     menuItem: "manty",
//     type: "Fusion",
//     meat: "beef",
//     frozen: false,
//     price: 40,
//     size: 2,
//   },
//   {
//     menuItem: "manty",
//     type: "Classic",
//     meat: "lamp",
//     frozen: true,
//     price: 25,
//     size: 2,
//   },
//   {
//     menuItem: "manty",
//     type: "Fusion",
//     meat: "lamb",
//     frozen: false,
//     price: 40,
//     size: 2,
//   },
//   {
//     menuItem: "Laghman",
//     type: "hotmeal",
//     meat: "beef",
//     frozen: false,
//     price: 100,
//     size: 4,
//   },
//   {
//     menuItem: "Plov",
//     type: "hotmeal",
//     meat: "beef",
//     frozen: false,
//     price: 100,
//     size: 4,
//   },
// ];
// module.exports = {
//   getAll: function () {
//     return menuItems;
//   },
// };

// Compile the schema into a model and export it
module.exports = mongoose.model('Menu', menuSchema);
