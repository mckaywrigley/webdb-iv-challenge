exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, measurement_id: 3, quantity: 3.5 },
        { recipe_id: 1, ingredient_id: 2, measurement_id: 6, quantity: 8 },
        { recipe_id: 1, ingredient_id: 4, measurement_id: 6, quantity: 16 },
        { recipe_id: 2, ingredient_id: 3, measurement_id: 6, quantity: 12 },
        { recipe_id: 2, ingredient_id: 5, measurement_id: 3, quantity: 3 },
        { recipe_id: 3, ingredient_id: 2, measurement_id: 6, quantity: 16 },
        { recipe_id: 3, ingredient_id: 6, measurement_id: 6, quantity: 12 },
        { recipe_id: 3, ingredient_id: 4, measurement_id: 4, quantity: 1 }
      ]);
    });
};
