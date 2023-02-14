let listaDeProductos;
let pregunta;
opciones()

class productos{

    constructor(nombre,tipo,precio,stock){
        this.name=nombre;
        this.tipo=tipo;
        this.precio=precio;
        this.stock=stock;
    }
    get_mostrarStock(){
        console.log("----------------");
        console.log("Nombre:",this.name)
        console.log("Tipo:",this.tipo);
        console.log("Precio:$",this.precio);
        console.log("Stock:",this.stock);
    }
}
listaDeProductos=[];
listaDeProductos.push(new productos("Cartas","Poker",1500,5));
listaDeProductos.push(new productos("Cartas","Españolas",1000,10));
listaDeProductos.push(new productos("Dados","Profecional lados planos",3000,20));
listaDeProductos.push(new productos("Monedas","Poker*50",100,100));

function opciones(){
    console.log("1-----Comprar")
    console.log("2-----Salir")

    pregunta= parseInt(prompt("Que desea ralizar?"));

    if(pregunta==1){
        for(let productos of listaDeProductos){
            productos.get_mostrarStock();
        }        
    }else if (pregunta==2){
        salir()
    }
}

function salir(){
    alert("Fin del proceso");
}


