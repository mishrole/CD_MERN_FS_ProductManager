const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
  app.get('/', ProductController.index);
  app.get('/api', ProductController.welcome);
  app.post('/api/products', ProductController.createProduct);
}