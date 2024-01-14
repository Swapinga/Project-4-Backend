const fs = require('fs');

class ProductManager {
  constructor() {
    this.autoIncrementId = 1;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    if (fs.existsSync(`./archivos/${product.code}.txt`)) {
      console.error("Ya existe un producto con ese código");
      return;
    }

    const newProduct = {
      ...product,
        path: `./archivos/${this.autoIncrementId}`,
        id: this.autoIncrementId++
    };
    console.log("Producto agregado:", newProduct);
    fs.writeFileSync(`${newProduct.path}.txt`,`${JSON.stringify(newProduct)}`)
  }

  getProducts() {
    const archivosPath = './archivos/';
    const files = fs.readdirSync(archivosPath);

    const products = files.map((file) => {
      const filePath = `${archivosPath}${file}`;
      const contenido = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return contenido;
    });

    return products;
  }

  getProductById(id) {
    if(fs.existsSync(`./archivos/${id}.txt`)){
      let contenido = JSON.parse(fs.readFileSync(`./archivos/${id}.txt`,'utf-8'));
      return contenido;
    }
    else {
      console.log("Producto no encontrado");
    }
  }

  updateProduct(id, contenidoNuevo) {
    let contenidoOriginal = this.getProductById(id);
      const productoNuevo = {
        ...contenidoOriginal,
        ...contenidoNuevo,
        id: id, 
      };

      fs.writeFileSync(`${productoNuevo.path}.txt`, `${JSON.stringify(productoNuevo)}`);

      console.log("Producto actualizado:", productoNuevo);
    }

    deleteProduct(id) {
      const filePath = `./archivos/${id}.txt`;
  
      if (fs.existsSync(filePath)) {
        const deletedProduct = this.getProductById(id);
  
        fs.unlinkSync(filePath);
  
        console.log("Producto eliminado:", deletedProduct);
      } else {
        console.error("Producto no encontrado");
      }
    }
}


// Testing
const prueba = new ProductManager();

console.log(prueba.getProducts())

prueba.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

console.log(prueba.getProducts());

console.log(prueba.getProductById(1));

console.log(prueba.getProductById(2));

pruebaCambio = {
  title: "producto prueba",
  description: "El producto fue alterado",
  price: 400,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
}

console.log(prueba.updateProduct(1,pruebaCambio));

console.log(prueba.getProductById(1));

prueba.deleteProduct(1);
// Testing fin
