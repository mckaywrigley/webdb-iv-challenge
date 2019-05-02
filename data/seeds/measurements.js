exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("measurements")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("measurements").insert([
        { measurement_name: "tsp" },
        { measurement_name: "tbsp" },
        { measurement_name: "cups" },
        { measurement_name: "lbs" },
        { measurement_name: "oz" },
        { measurement_name: "ml" },
        { measurement_name: "l" },
        { measurement_name: "g" }
      ]);
    });
};
