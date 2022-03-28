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

module.exports.getAllProducts = (req, res) => {
  Product.find({})
  .then(data => 
    res.json(data)
  )
  .catch(err =>
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}

module.exports.getProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
  .then(data =>
    res.json(data)
  )
  .catch(err => 
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then(data =>
    res.json(data)
  )
  .catch(err => 
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
  .then(data =>
    res.json(data)
  )
  .catch(err =>
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  )
}