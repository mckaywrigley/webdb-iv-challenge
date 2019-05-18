exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl
      .string("recipe_name")
      .notNullable()
      .unique();
    tbl.text("instructions");
    tbl
      .integer("dish_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    //   FOR INGREDIENTS
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
