const fs = require('fs');

class CartManager {
  constructor() {
    this.cartsFilePath = './data/carrito.json';
  }

  createCart() {
    const cartId = this.generateUniqueId();
    const cart = { id: cartId, products: [] };
    this.saveCart(cart);
    return cart;
  }

  getProductsInCart(cartId) {
    const carts = this.getCarts();
    const cart = carts.find(cart => cart.id === cartId);
    return cart ? cart.products : null;
  }

  addProductToCart(cartId, productId, quantity) {
    const carts = this.getCarts();
    const cartIndex = carts.findIndex(cart => cart.id === cartId);

    if (cartIndex !== -1) {
      const cart = carts[cartIndex];
      const existingProductIndex = cart.products.findIndex(product => product.id === productId);

      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += quantity;
      } else {
        cart.products.push({ id: productId, quantity });
      }

      this.saveCarts(carts);
      return cart.products;
    }

    return null;
  }

  generateUniqueId() {
    const carts = this.getCarts();
    let newId = Math.floor(Math.random() * 1000) + 1;

    while (carts.some(cart => cart.id === newId)) {
      newId = Math.floor(Math.random() * 1000) + 1;
    }

    return newId;
  }

  getCarts() {
    const cartsData = fs.readFileSync(this.cartsFilePath, 'utf-8');
    return JSON.parse(cartsData);
  }

  saveCarts(carts) {
    fs.writeFileSync(this.cartsFilePath, JSON.stringify(carts, null, 2));
  }
}

module.exports = CartManager;
