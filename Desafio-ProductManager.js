class ProductManager {
  constructor() {
    this.products = [];
    this.autoIncrementId = 1;
  }

  addProduct(product) {
    // Validar que todos los campos sean obligatorios
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

    // Validar que no se repita el campo "code"
    if (this.products.some((existingProduct) => existingProduct.code === product.code)) {
      console.error("Ya existe un producto con ese código");
      return;
    }

    // Agregar el producto con id autoincrementable
    const newProduct = {
      ...product,
      id: this.autoIncrementId++,
    };
    this.products.push(newProduct);
    console.log("Producto agregado:", newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const foundProduct = this.products.find((product) => product.id === id);

    if (foundProduct) {
      return foundProduct;
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

console.log(prueba.getProducts())

prueba.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

console.log(prueba.getProductById(1));

console.log(prueba.getProductById(2));
// Testing fin