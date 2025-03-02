const body = document.getElementsByTagName('body');

//Función para cambiar de tema claro a tema oscuro
function cambiarTema() {
  if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')
  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  }
};

//Asigno un evento de click para abrir las cajas
let cajas=document.querySelectorAll(".cajita.afic");
cajas.forEach(elemento => {
  elemento.addEventListener("click",abrirCaja);
})

//Mapa que contendrá el contenido de cada caja
let contenidos=new Map;
contenidos.set("idjuegos","<div>• Celeste<br/>• Live is strange<br/>• Battlefront II<br/>• League of Legends</div>");
contenidos.set("idescalada","<div>• Boulder<br/>• Senderismo<br/>• Vivac en el bosque<br/>• Bushcraft</div>");
contenidos.set("idleer","<div>• To your eternity<br/>• Solanin<br/>• El Hobitt<br/>• El señor de los anillo<br/>• Buenas noches PunPun</div>");
contenidos.set("idcocinar","<div>Me gusta cocinar platos complejos y experimentar con sabores de diferentes culturas. Siempre intento inovar y darle un toque diferente a cada plato.</div>");

/*
Función que añade una clase a la caja que ha provocado el evento la cual lo expandira, y 
añadirá una clase al resto de cajas para que desaparezcan.
Además añadirá un nuevo evento a la caja seleccionada el cual llama a cerrarCaja()
*/
function abrirCaja(){
  this.classList.add("botonSelec");
  cajas.forEach(elemento=>{
    if(elemento!==this)elemento.classList.add("botonNoSelec");
    else {
      elemento.addEventListener("click",cerrarCaja)
      elemento.innerHTML=contenidos.get(elemento.id);
    };
  })
}

/*Función que deshace todo lo hecho por la anterior clase, devolviendo todasl las
cajas a la normalidad*/
function cerrarCaja(){
  this.classList.remove("botonSelec");
  cajas.forEach(elemento=>{
    if(elemento!==this)elemento.classList.remove("botonNoSelec");
    else{
      elemento.innerHTML="" 
      elemento.removeEventListener("click",cerrarCaja);
      elemento.addEventListener("click",abrirCaja);

    }
  })
}