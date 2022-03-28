// Express
const express = require('express');
// Cors
const cors = require('cors');

const app = express();
const port = 8000;

// Mongoose Config
require('./server/config/mongoose.config');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
require('./server/routes/product.routes')(app);

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});