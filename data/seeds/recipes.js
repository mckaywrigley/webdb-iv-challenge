exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { ingredient_name: "Flour" },
        { ingredient_name: "Sugar" },
        { ingredient_name: "Salt" },
        { ingredient_name: "Tomato Sauce" },
        { ingredient_name: "Taco Shells" },
        { ingredient_name: "Ground Beef" },
        { ingredient_name: "Lettuce" }
      ]);
    });
};
