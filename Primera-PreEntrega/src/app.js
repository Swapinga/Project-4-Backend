const express = require('express');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

app.listen(8080, () => console.log("Servidor arriba en el puerto 8080!"));
