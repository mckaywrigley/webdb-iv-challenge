const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe
};

function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes").where({ id });
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => {
      return getRecipe([ids[0]]);
    });
}
