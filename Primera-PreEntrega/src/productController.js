const ProductManager = require('../models/ProductManager');
const productManager = new ProductManager();

exports.getProducts = (req, res) => {
  const products = productManager.getProducts();
  res.json({ products });
};

exports.getProductById = (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = productManager.getProductById(productId);

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

exports.addProduct = (req, res) => {
  const product = req.body;
  const newProduct = productManager.addProduct(product);
  res.json({ product: newProduct });
};

exports.updateProduct = (req, res) => {
  const productId = parseInt(req.params.pid);
  const updatedFields = req.body;
  const updatedProduct = productManager.updateProduct(productId, updatedFields);

  if (updatedProduct) {
    res.json({ product: updatedProduct });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

exports.deleteProduct = (req, res) => {
  const productId = parseInt(req.params.pid);
  const deleted = productManager.deleteProduct(productId);

  if (deleted) {
    res.json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};
