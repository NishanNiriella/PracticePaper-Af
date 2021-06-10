const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

module.exports = () => {
    router.post('/create', categoryController.createCategory);
    router.get('/', categoryController.getAllCategory)
    router.get('/:id', categoryController.getVehicleForCategory);
    router.get('/v2/:id', categoryController.getCategoryDetails);
    router.post('/calculate', categoryController.calculateTripCost);
    return router;
}