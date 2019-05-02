const db = require("../data/dbConfig");

module.exports = {
  getDishes,
  addDish,
  getDish
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes").where({ id });
}

function addDish(dish) {
  return db("dishes").insert(dish);
}
