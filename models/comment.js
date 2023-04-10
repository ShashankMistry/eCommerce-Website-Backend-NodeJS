//created model for comments with fields productId, email,rating, review, image
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;