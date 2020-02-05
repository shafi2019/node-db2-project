
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '1HGBH41KXML109186', make: 'telsa', model: 'model S', mileage: 123124, transmission: 'auto', titleStatus: 'clean' },
        { VIN: '1HGJF41KXML109186', make: 'Chevy', model: 'Impala', mileage: 32909, transmission: 'manual', titleStatus: 'salvaged' },
        { VIN: '1HSFH41KXML109186', make: 'BMW', model: 'M3', mileage: 75678, transmission: 'auto', titleStatus: 'clean' },
        { VIN: '1HGBH41KXML239186', make: 'Audi', model: 'A4', mileage: 8765, transmission: 'manual', titleStatus: 'clean' },
        { VIN: '1HGBH41KXML109194', make: 'Ford', model: 'Mustang', mileage: 132445, transmission: 'auto', titleStatus: 'totalled' }
      ]);
    });
};
