exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("measurement_id")
      .notNullable()
      .references("id")
      .inTable("measurements")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .float("quantity")
      .notNullable()
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
