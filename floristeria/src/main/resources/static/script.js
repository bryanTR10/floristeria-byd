// Función para mostrar los detalles de un pedido
function mostrarDetallesPedido(idPedido) {
  // Obtener el elemento HTML que contiene los detalles del pedido
  var detallesPedido = document.getElementById("detalles-pedido-" + idPedido);

  // Mostrar los detalles del pedido
  detallesPedido.style.display = "block";
}

// Función para ocultar los detalles de un pedido
function ocultarDetallesPedido(idPedido) {
  // Obtener el elemento HTML que contiene los detalles del pedido
  var detallesPedido = document.getElementById("detalles-pedido-" + idPedido);

  // Ocultar los detalles del pedido
  detallesPedido.style.display = "none";
}

// Función para agregar un producto al carrito de compras
function agregarProductoAlCarrito(idProducto) {
  // Obtener el elemento HTML que contiene el carrito de compras
  var carritoCompras = document.getElementById("carrito-compras");

  // Agregar el producto al carrito de compras
  carritoCompras.innerHTML += "<li>Producto " + idProducto + "</li>";
}

// Función para eliminar un producto del carrito de compras
function eliminarProductoDelCarrito(idProducto) {
  // Obtener el elemento HTML que contiene el carrito de compras
  var carritoCompras = document.getElementById("carrito-compras");

  // Eliminar el producto del carrito de compras
  carritoCompras.innerHTML = carritoCompras.innerHTML.replace(
    "<li>Producto " + idProducto + "</li>",
    ""
  );
}

// Función para procesar el pago
function procesarPago() {
  // Obtener el elemento HTML que contiene la información de pago
  var informacionPago = document.getElementById("informacion-pago");

  // Procesar el pago
  alert("Pago procesado con éxito");
}

// Eventos
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el elemento HTML que contiene el botón de agregar producto al carrito
  var botonAgregarProductoAlCarrito = document.getElementById(
    "boton-agregar-producto-al-carrito"
  );

  // Agregar evento de clic al botón de agregar producto al carrito
  botonAgregarProductoAlCarrito.addEventListener("click", function () {
    agregarProductoAlCarrito(1);
  });

  // Obtener el elemento HTML que contiene el botón de eliminar producto del carrito
  var botonEliminarProductoDelCarrito = document.getElementById(
    "boton-eliminar-producto-del-carrito"
  );

  // Agregar evento de clic al botón de eliminar producto del carrito
  botonEliminarProductoDelCarrito.addEventListener("click", function () {
    eliminarProductoDelCarrito(1);
  });

  // Obtener el elemento HTML que contiene el botón de procesar pago
  var botonProcesarPago = document.getElementById("boton-procesar-pago");

  // Agregar evento de clic al botón de procesar pago
  botonProcesarPago.addEventListener("click", function () {
    procesarPago();
  });
});
