exports.up = function(knex, Promise) {
  return knex.schema.createTable("measurements", tbl => {
    tbl.increments();
    tbl.string("measurement_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("measurements");
};
