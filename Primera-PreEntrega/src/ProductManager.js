const fs = require('fs');

class ProductManager {
  constructor() {
    this.productsFilePath = './data/productos.json';
  }

  getProducts() {
    const productsData = fs.readFileSync(this.productsFilePath, 'utf-8');
    return JSON.parse(productsData);
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find(product => product.id === id);
  }

  addProduct(product) {
    const products = this.getProducts();
    product.id = this.generateUniqueId();
    products.push(product);
    this.saveProducts(products);
    return product;
  }

  updateProduct(id, updatedFields) {
    const products = this.getProducts();
    const index = products.findIndex(product => product.id === id);
    
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedFields, id };
      this.saveProducts(products);
      return products[index];
    }

    return null;
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => product.id !== id);

    if (filteredProducts.length < products.length) {
      this.saveProducts(filteredProducts);
      return true;
    }

    return false;
  }

  generateUniqueId() {
    const products = this.getProducts();
    let newId = Math.floor(Math.random() * 1000) + 1;

    while (products.some(product => product.id === newId)) {
      newId = Math.floor(Math.random() * 1000) + 1;
    }

    return newId;
  }

  saveProducts(products) {
    fs.writeFileSync(this.productsFilePath, JSON.stringify(products, null, 2));
  }
}

module.exports = ProductManager;
