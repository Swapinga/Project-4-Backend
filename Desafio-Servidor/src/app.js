const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const productManager = new ProductManager();


app.get('/products', (req, res) => {
    const limit = req.query.limit;
  
    if (limit) {
      const limitedProducts = productManager.getProducts().slice(0, limit);
      res.json({limitedProducts });
    } else {
      res.json(productManager.getProducts());
    }
  });

  app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId);
  
    if (product) {
      res.json({ product: product });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  });
  

app.listen(8080,()=>console.log("Servidor arriba en el puerto 8080!"))
