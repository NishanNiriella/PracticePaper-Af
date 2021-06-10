const Category = require('../model/category.model');
const Vehicle = require('../model/vehicle.model');

const createCategory = async (req, res) => {
    if (req.body) {
        const category = new Category(req.body);
        category.save()
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

const getAllCategory = async (req, res) => {
    await Category.find({})
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
}

const getVehicleForCategory = async (req, res) => {
    if (req.params && req.params.id) {
        const vehicles = await Vehicle.find({'categories': req.params.id})
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

const getCategoryDetails = async (req, res) => {
    if (req.params && req.params.id) {
        const category = await Category.findById(req.params.id)
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

const calculateTripCost = async (req, res) => {
    if (req.body) {
        const vehicleValue = req.body.vehicleValue;
        const categoryValue = req.body.categoryValue;
        const duration = req.body.duration;

        const totalCost = duration * (vehicleValue + categoryValue);
        res.status(200).send({data: totalCost});
    }
}

module.exports = {
    createCategory,
    getAllCategory,
    getVehicleForCategory,
    getCategoryDetails,
    calculateTripCost
}