const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
  res.redirect('/api');
}

module.exports.welcome = (req, res) => {
  res.json({
    welcome: 'Welcome to the Product Manager API'
  });
}

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;

  Product.create({
    title,
    price,
    description
  })
  .then(data => 
    res.json({
      product: data
    })
  )
  .catch(err => 
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}