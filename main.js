// VARIABLE PARA VER LA LISTA DE PRODUCTOS
let listaDeProductosMensaje = "Lista de Productos y sus precios:\n";

// OBJETO TIPO CLASE
class Productos {
  constructor(producto, precio) {
    this.producto = producto;
    this.precio = precio;
  }
}

// CREACIÓN DE OBJETOS
const PRODUCTO1 = new Productos("Arroz", 1500);
const PRODUCTO2 = new Productos("Fideos", 1200);
const PRODUCTO3 = new Productos("Bananas", 150);
const PRODUCTO4 = new Productos("Galletitas", 400);
const PRODUCTO5 = new Productos("Pote de Ketchup", 500);

// ARRAYS
// UNO DE LOS OBJETOS CREADOS
const ListaDeCompras = [PRODUCTO1, PRODUCTO2, PRODUCTO3, PRODUCTO4, PRODUCTO5];
// ARRAY VACÍO PARA AÑADIR AL CARRITO
const CarritoDeCompras = [];

// HIGH ORDER FUNCTION forEach(), PARA VISUALIZAR LA LISTA DE LOS PRODUCTOS
ListaDeCompras.forEach((items) => {
  listaDeProductosMensaje += `${items.producto}: $${items.precio}\n `;
});

// ARROW FUNCTIONS

// Este sirve para seleccionar los productos
const productosElección = () => {
  let carrito = "";
  do {
    carrito = prompt(
      "Para añadir productos al carrito, debe ingresarlos por su nombre. (Ingrese 0 para finalizar esta compra)"
    );
    switch (carrito) {
      case "Arroz":
        agregarAlCarrito(PRODUCTO1);
        alert(`Se agregó ${PRODUCTO1.producto} al carrito `);
        console.log(`Se agregó ${PRODUCTO1.producto} al carrito `);
        break;

      case "Fideos":
        agregarAlCarrito(PRODUCTO2);
        alert(`Se agregaron ${PRODUCTO2.producto} al carrito`);
        console.log(`Se agregaron ${PRODUCTO2.producto} al carrito `);
        break;

      case "Bananas":
        agregarAlCarrito(PRODUCTO3);
        alert(`Se agregaron ${PRODUCTO3.producto} al carrito`);
        console.log(`Se agregaron ${PRODUCTO3.producto} al carrito `);
        break;

      case "Galletitas":
        agregarAlCarrito(PRODUCTO4);
        alert(`Se agregaron ${PRODUCTO4.producto} al carrito`);
        console.log(`Se agregaron ${PRODUCTO4.producto} al carrito `);
        break;

      case "Pote de Ketchup":
        agregarAlCarrito(PRODUCTO5);
        alert(`Se agregó ${PRODUCTO5.producto} al carrito`);
        console.log(`Se agregó ${PRODUCTO5.producto} al carrito `);
        break;

      case "0":
        alert(
          "Selección de productos finalizada. Productos añadidos al carrito"
        );
        console.log(
          "Selección de productos finalizada. Productos añadidos al carrito"
        );
        break;

      default:
        alert("Elija una opción correcta");
        break;
    }
  } while (carrito !== "0");
};

// Este es para agregarlos al carrito
const agregarAlCarrito = (producto) => {
  const productoEnCarrito = CarritoDeCompras.find(
    (item) => item.producto === producto.producto
  );
  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    producto.cantidad = 1;
    CarritoDeCompras.push(producto);
  }
};

// Como dice su nombre, es para ver la lista de productos añadidos al carrito, con sus cantidades y subtotales
const VerCarrito = () => {
  if (CarritoDeCompras.length > 0) {
    let mensajeCarrito = "Productos en el carrito:\n";
    let totalPrecio = 0;
    CarritoDeCompras.forEach((item) => {
      const subtotal = item.precio * item.cantidad;
      mensajeCarrito += `${item.producto}: $${item.precio} \nCantidad: ${item.cantidad} y Subtotal: $${subtotal}\n------------------- \n`;
      totalPrecio += subtotal;
    });
    mensajeCarrito += `Total: $${totalPrecio}`;
    alert(mensajeCarrito);
  } else {
    alert("El carrito está vacío");
  }
};

// El Menú general de todo
const COMPRAS = () => {
  let opcion = "";
  do {
    opcion = prompt(`Seleccione una opción:
    1. Ver lista de Productos
    2. Ver mi carrito
    3. Seleccione los productos para realizar la compra
    4. Finalizar compra`);

    switch (opcion) {
      case "1":
        alert(listaDeProductosMensaje);
        break;

      case "2":
        VerCarrito();
        break;

      case "3":
        productosElección();
        break;

      case "4":
        alert("Compra finalizada, Muchas gracias por comprar");
        console.log("Compra finalizada, Muchas gracias por comprar");
        break;

      default:
        alert("Elija una opción correcta");
        break;
    }
  } while (opcion !== "4");
};

COMPRAS();
