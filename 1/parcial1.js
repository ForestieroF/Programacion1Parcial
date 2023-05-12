'use strict';

/*
 * FORESTIERO, FRANCO
 */

let productos = [];

let produc1 = {
    Nombre: 'Cuaderno N3',
    Foto: 'imgs/n3.jpg',
    Precio: 1200
};

let produc2 = {
    Nombre: 'Pack X3 Lapiceras',
    Foto: 'imgs/lx3.jpeg',
    Precio: 500
};

let produc3 = {
    Nombre: 'Pack X3 Resaltador',
    Foto: 'imgs/rx3.jpg',
    Precio: 950
};

let produc4 = {
    Nombre: 'Cuaderno A4',
    Foto: 'imgs/a4.jpeg',
    Precio: 2000
};

let produc5 = {
    Nombre: 'Toner COLOR negro',
    Foto: 'imgs/toner.jpeg',
    Precio: 5000
};

let produc6 = {
    Nombre: 'Carpeta A5',
    Foto: 'imgs/a5.jpg',
    Precio: 2200
};

let produc7 = {
    Nombre: 'Tijera Naped',
    Foto: 'imgs/tijera.jpg',
    Precio: 3200
};

let produc8 = {
    Nombre: 'Repuesto Hoja Cuadriculada N3',
    Foto: 'imgs/cuadriculada.jpg',
    Precio: 1900
};

let produc9 = {
    Nombre: 'Lapiz HB',
    Foto: 'imgs/lapiz.jpg',
    Precio: 600
};


productos.push(produc1, produc2, produc3, produc4, produc5, produc6, produc7, produc8, produc9);

const Mostrar = () => {
    
    let html = '';

    for (let i = 0; productos.length > i; i++) {

        html += '<div class="tarjeta">'
        html += '<h2>' + productos[i].Nombre + '</h2>';
        html += '<img src="' + productos[i].Foto + '" alt=" ">';
        html += '<h3> Precio $ ' + productos[i].Precio + '</h3>';
        html += '</br>'
        html += '</div>'

    document.getElementById('info').innerHTML = html;
}
}
