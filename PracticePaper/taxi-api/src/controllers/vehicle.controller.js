const Vehicle = require('../model/vehicle.model');

const createVehicle = async (req, res) => {
    if (req.body) {
        const vehicle = new Vehicle(req.body);
        vehicle.save()
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

const getAllVehicles = async (req, res) => {
    await Vehicle.find({})
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
}

const getVehicleDetails = async (req, res) => {
    if (req.params && req.params.id) {
        const vehicle = await Vehicle.findById(req.params.id)
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

module.exports = {
    createVehicle,
    getAllVehicles,
    getVehicleDetails
}