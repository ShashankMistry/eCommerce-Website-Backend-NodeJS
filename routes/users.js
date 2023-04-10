const express = require('express');
const router = express.Router();
const Cart = require('../models/user');

//ceate route for user with fields email, fName, lName, email, pass, address
router.post('/user', (req, res) => {
    const { fName, lName, email, pass, address } = req.body;
    const user = new User({
        fName,
        lName,
        email,
        pass,
        address
    });
    user.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all users
router.route('/user').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get user by email
router.route('/user/:email').get((req, res) => {
    User.find({ email: req.params.email })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to delete user
router.route('/user/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to update user
router.route('/user/:id').patch((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.fName = req.body.fName;
            user.lName = req.body.lName;
            user.email = req.body.email;
            user.pass = req.body.pass;
            user.address = req.body.address;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

