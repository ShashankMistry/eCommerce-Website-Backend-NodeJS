//create model for cart with fields name, price, email, quantity
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;