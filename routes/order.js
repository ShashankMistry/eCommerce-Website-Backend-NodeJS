const express = require('express');
const router = express.Router();
const Cart = require('../models/order');

//ceate route for order with fields productName, productId, name, email, total, quantity
router.post('/order', (req, res) => {
    const { productName, productId, name, email, total, quantity } = req.body;
    const order = new Order({
        productName,
        productId,
        name,
        email,
        total,
        quantity
    });
    order.save()
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all orders
router.route('/order').get((req, res) => {
    Order.find()
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all orders by email
router.route('/order/:email').get((req, res) => {
    Order.find({ email: req.params.email })
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to delete order
router.route('/order/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(() => res.json('Order deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to update order
router.route('/order/:id').patch((req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            order.productName = req.body.productName;
            order.productId = req.body.productId;
            order.name = req.body.name;
            order.email = req.body.email;
            order.total = req.body.total;
            order.quantity = req.body.quantity;

            order.save()
                .then(() => res.json('Order updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
