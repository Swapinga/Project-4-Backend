const CartManager = require('../models/CartManager');
const cartManager = new CartManager();

exports.createCart = (req, res) => {
  const newCart = cartManager.createCart();
  res.json({ cart: newCart });
};

exports.getProductsInCart = (req, res) => {
  const cartId = parseInt(req.params.cid);
  const productsInCart = cartManager.getProductsInCart(cartId);

  if (productsInCart) {
    res.json({ products: productsInCart });
  } else {
    res.status(404).json({ error: 'Cart not found' });
  }
};

exports.addProductToCart = (req, res) => {
  const cartId = parseInt(req.params.cid);
  const productId = parseInt(req.params.pid);
  const quantity = req.body.quantity || 1;

  const productsInCart = cartManager.addProductToCart(cartId, productId, quantity);

  if (productsInCart) {
    res.json({ products: productsInCart });
  } else {
    res.status(404).json({ error: 'Cart not found' });
  }
};
