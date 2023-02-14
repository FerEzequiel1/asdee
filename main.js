let listaDeProductos;
let pregunta;
let compraDeUsuario;
let busquedaDeProducto;
let cantidad;
let precio;
let saldo=0;
let valorDeCompra;

class productos {
  constructor(nombre, tipo, precio) {
    this.name = nombre;
    this.tipo = tipo;
    this.precio = precio;
  }
  get_mostrarStock() {
    console.log("----------------");
    console.log("Nombre:", this.name);
    console.log("Tipo:", this.tipo);
    console.log("Precio:$", this.precio);
  }
}
listaDeProductos = [];
listaDeProductos.push(new productos("Cartas", "Poker", 1500));
listaDeProductos.push(new productos("Mesa", "Terciopelo verde", 5000));
listaDeProductos.push(new productos("Dados", "Profecional lados planos", 3000));
listaDeProductos.push(new productos("Monedas", "Poker*50", 100));

function opciones() {
  console.log("1-----Comprar");
  console.log("2-----Salir");
  pregunta = parseInt(prompt("Que desea realizar?"));

  if (pregunta === 1) {
    let productosTexto = listaDeProductos
      .map(function (producto) {
        return ("-" +producto.name +"(" +producto.tipo +") Precio:$" +producto.precio);
      })
      .join("\n");
    console.log("Los productos son:\n" + productosTexto);
    

  } else if (pregunta === 2) {
    salir();
  }
}

function salir() {
  alert("Fin del proceso");
}

opciones();

function buscarProducto(productos){
    return productos.name==compraDeUsuario;
}

compraDeUsuario=prompt("Que producto desea comprar?");

busquedaDeProducto=listaDeProductos.find(buscarProducto);
console.log(busquedaDeProducto);

cantidad=prompt("Cuantas unidades desea comprar?");
valorDeCompra= cantidad*(buscarProducto.precio);
 
if(valorDeCompra>saldo){
    alert("Lo sentimos,su saldo es menor al precio de compra,intente nuevamente");
}
else{
    alert("Gracias por su compra");
}


