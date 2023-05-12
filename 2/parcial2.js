'use strict';

/*
 * FORESTIERO, FRANCO
 */

let productosCarga = [];

const Mostrar = () => {
   
    let html = '';

    for (let i = 0; productosCarga.length > i; i++) {
        html += '<div class="tarjeta">'
        html += '<h2> ID: ' + productosCarga[i]['ID'] + '</h2>';
        html += '<h1> ' + productosCarga[i].Nombre + '</h1>';
        html += '<h3> CATEGORÍA ' + productosCarga[i]['cat'] + '</h3>';
        html += '<h4> Precio: $ ' + productosCarga[i]['precio'] + '</h4>';
        html += '<p>' + productosCarga[i].desc + '</p>';
        html += '</div>'
}

    document.getElementById('info').innerHTML = html;
}

const Cargar = () => {
    IngresoProducto();
    
}

function IngresoProducto() {

    let productos = {};
    
    productos['ID']= prompt('Ingrese el código númerico del producto');
            while (isNaN(productos['ID']) || productos['ID'] <= 1 || productos['ID'] >= 999 || !parseFloat(productos['ID']) || productos['ID'] == NaN) {
                alert('No se registro una respuesta valida, por favor ingresa el codigo númerico del producto');
                productos['ID'] = prompt('Dato inválido, ingrese el código númerico del producto');
            }

            productos.Nombre= prompt('Ingrese el nombre del producto');
            
            while (productos.Nombre.length == 0) {
                alert('No se registro ninguna respuesta, por favor ingresa el nombre del producto');
                productos.Nombre = prompt('Dato inválido, ingrese el nombre del producto');
            }
        
            productos['cat']= prompt('Ingrese la categoría del producto');
            while (productos['cat'] == 0) {
                alert('No se registro una respuesta valida, por favor ingresa la categoría del producto');
                productos['cat'] = prompt('Dato inválido, ingrese la categoría del producto');
            }
        
            productos['precio']= prompt('Ingrese el precio del producto');
            while (isNaN(productos['precio']) || productos['precio'] <= 1 ) {
                alert('No se registro una respuesta valida, por favor ingresa el precio del producto');
                productos['ID'] = prompt('Dato inválido, ingrese el precio del producto');
            }
            
            productos.desc= prompt('Ingrese la descripción del producto');
        
            while (productos.desc.length == 0) {
                alert('No se registro ninguna respuesta, por favor ingresa la descripción del producto');
                productos.desc = prompt('Dato inválido, ingrese la descripción del producto');
            };



        console.log(productos);
        productosCarga.push(productos);

        }

