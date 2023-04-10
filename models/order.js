//create model for order with fields productName, productId, name, email, total, quantity
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;