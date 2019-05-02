exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "Ordered Pizza",
          instructions: "Just order pizza",
          dish_id: "1"
        },
        {
          recipe_name: "Homemade Pizza",
          instructions: "Just order pizza",
          dish_id: "1"
        },
        {
          recipe_name: "Street Tacos",
          instructions: "Small corn torilla and carne asada.",
          dish_id: "2"
        },
        {
          recipe_name: "Cobb Salad",
          instructions: "Lettuce, egg, bacon, blue cheese.",
          dish_id: "3"
        }
      ]);
    });
};
