const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle.controller');

module.exports = () => {
    router.post('/create', vehicleController.createVehicle);
    router.get('/', vehicleController.getAllVehicles);
    router.get('/:id', vehicleController.getVehicleDetails);
    return router;
}