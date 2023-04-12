const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

//ceate route for cart with fields name, price, email, quantity
router.post('/', (req, res) => {
    const { name, price, email, quantity } = req.body;
    const cart = new Cart({
        name,
        price,
        email,
        quantity
    });
    cart.save()
        .then(() => res.json('Cart added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all items in cart
router.get('/',(req, res) => {
    Cart.find()
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all items in cart by email
router.get('/:email',(req, res) => {
    Cart.find({ email: req.params.email })
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to delete item from cart
router.delete('/:id',(req, res) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cart item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to update item in cart
router.patch('/:id',(req, res) => {
    Cart.findById(req.params.id)
        .then(cart => {
            cart.name = req.body.name;
            cart.price = req.body.price;
            cart.email = req.body.email;
            cart.quantity = req.body.quantity;

            cart.save()
                .then(() => res.json('Cart item updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
