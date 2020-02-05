
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {Make: 'Toyota', Model: 'Camry', year: 2020},
        {Make: 'Caddilac', Model: 'Escalade', year: 2021},
        {Make: 'Ford', Model: 'explorer', year: 2020},
        {Make: 'Chevrlet', Model: 'Corvette', year: 2020}
      ]);
    });
};
