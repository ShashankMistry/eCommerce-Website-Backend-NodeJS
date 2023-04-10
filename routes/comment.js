const express = require('express');
const router = express.Router();
const Cart = require('../models/comment');

//ceate route for comment with fields productId, email, rating, review, image
//create route for post comment
router.post('/comment', (req, res) => {
    const { productId, email, rating, review, image } = req.body;
    const comment = new Comment({
        productId,
        email,
        rating,
        review,
        image
    });
    comment.save()
        .then(() => res.json('Comment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all comments
router.route('/comment').get((req, res) => {
    Comment.find()
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to get all comments by productId
router.route('/comment/:productId').get((req, res) => {
    Comment.find({ productId: req.params.productId })
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route to delete comment
router.route('/comment/:id').delete((req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Comment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


