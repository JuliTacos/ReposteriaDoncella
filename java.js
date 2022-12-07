

function add(x){


    
        item = " • " + x + " ";
   
        

        listado_array.push(item);
        // vaciar la lista
        document.getElementById("lista_de_carrito").innerHTML = "";
      


         for(var i = 0; i < listado_array.length;i++ ){
           
             document.getElementById("lista_de_carrito").innerHTML += listado_array[i];
             document.getElementById("lista_de_carrito").innerHTML += "<br>";
         }
        //MSM AGREGADO
        alert("Producto " + x + " agregado a la canasta exitosamente");
       
    }

     //MSM ENCABEZADO Y NUMERO DE WASA
let wame = "https://wa.me/573125609071?text=Estoy interesado en los siguientes productos: ";





function openwin(){
    let mensaje =  document.getElementById("lista_de_carrito").textContent;
    wame+= mensaje;
    // alert(wame);
     window.open(wame);
}
