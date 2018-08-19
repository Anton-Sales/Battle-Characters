
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
      table.increments('id')
      table.string('name')
      table.string('address')
      table.integer('age')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
