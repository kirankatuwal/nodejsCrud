const express = require('express');
const route = express.Router();
const services = require('../services/render');
/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);
route.get('/add-user', services.add_user);
route.get('/update', services.update);
route.get('/delete', services.delete);


module.exports = route;