
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Anton', address: 'hello123', age: '12'},
        {id: 2, name: 'Tony', address: 'helo4141', age: '13'},
        {id: 3, name: 'Twon', address: 'hello41231', age: '14'}
      ]);
    });
};
