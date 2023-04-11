const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//ceate route for product with fields name, description, details, image, price
router.post('/', (req, res) => {
    const { name, description, details, image, price } = req.body;
    const product = new Product({
        name,
        description,
        details,
        image,
        price
    });
    product.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all products
router.get('/',(req, res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get product by id
router.get('/:id',(req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to delete product
router.delete('/:id',(req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to update product
router.patch('/:id',(req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.description = req.body.description;
            product.details = req.body.details;
            product.image = req.body.image;
            product.price = req.body.price;

            product.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
