exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
      tbl.text('Make', 128).unique().notNullable();
      tbl.text('Model', 128).unique().notNullable();
      tbl.decimal('year');   
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
