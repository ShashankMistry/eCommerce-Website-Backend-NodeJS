const express = require('express');
const router = express.Router();
const User = require('../models/user');

//ceate route for user with fields email, fName, lName, email, pass, address
router.post('/', (req, res) => {
    const { _id, fName, lName, email, pass, address } = req.body;
    // console.log(req.body);
    const user = new User({
        _id,
        fName,
        lName,
        email,
        pass,
        address
    });
    // console.log(user);
    user.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all users
router.get('/', (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get user by email
router.get('/:email',(req, res) => {
    User.find({ _id: req.params.email })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to delete user
router.delete('/:id',(req, res) => {
    User.findOneAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});



//create route to update user
router.patch('/:id',(req, res) => {
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

