const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category: {type:String, required: true, trim: true},
    value: {type: Number, required: true},
    vehicles: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'vehicles'}]
})

const Category = mongoose.model('categories', CategorySchema);
module.exports = Category;