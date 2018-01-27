'use strict';
module.exports = function(app) {
  var coches = require('../controllers/carsController');

  // coches Routes
  app.route('/cars')
    .get(coches.list_cars)
    .post(coches.create_car);


  app.route('/cars/:carId')
    .get(coches.get_car_by_id)
    .put(coches.update_car)
    .delete(coches.delete_car);
};