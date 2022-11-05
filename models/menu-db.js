const menuItems = [
  {
    menuItem: "manty",
    type: "Classis",
    meat: "beef",
    frozen: true,
    price: 25,
    size: 2,
  },
  {
    menuItem: "manty",
    type: "Fusion",
    meat: "beef",
    frozen: false,
    price: 40,
    size: 2,
  },
  {
    menuItem: "manty",
    type: "Classis",
    meat: "lamp",
    frozen: true,
    price: 25,
    size: 2,
  },
  {
    menuItem: "manty",
    type: "Fusion",
    meat: "lamb",
    frozen: false,
    price: 40,
    size: 2,
  },
  {
    menuItem: "Laghman",
    type: "hotmeal",
    meat: "beef",
    frozen: false,
    price: 100,
    size: 4,
  },
  {
    menuItem: "Plov",
    type: "hotmeal",
    meat: "beef",
    frozen: false,
    price: 100,
    size: 4,
  },
];

//   module.exports = {
//     getAll: function() {
//       return menuItems;
//     }
//   };

// const todos = [
//     {todo: 'Feed Dogs', done: true},
//     {todo: 'Learn Express', done: false},
//     {todo: 'Buy Milk', done: false}
//   ];

module.exports = {
  getAll: function () {
    return menuItems;
  },
};
