const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// define port
const PORT = process.env.PORT || 3000;

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/eCommerceBackend', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('Connected to MongoDB')});


// Middleware
app.use(express.json());
app.use(cors());


// Routes
const cartRoutes = require('./routes/cart');
const commentRoutes = require('./routes/comment');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

app.use('/cart', cartRoutes);
app.use('/comment', commentRoutes);
app.use('/order', orderRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);

// Start server
app.listen (PORT, () => {
  console.log('listening on port', PORT);
}

);