'use strict';

/*
 * FORESTIERO, FRANCO
 */

let televisores = [];

let tele1 = {
    Codigo: 'NBLX32',
    Stock: '20',
    Foto: 'imgs/32.jpg',
    Precio: 75000,
    Desc: 'Televisor de 32 Pulgadas'
};

let tele2 = {
    Codigo: 'NBLX60',
    Stock: '15',
    Foto: './imgs/55.jpg',
    Precio: 149000,
    Desc: 'Televisor de 60 Pulgadas'
};

let tele3 = {
    Codigo: 'NBLX50',
    Stock: '12',
    Foto: './imgs/50.jpg',
    Precio: 119999,
    Desc: 'Televisor de 50 Pulgadas'
};

let tele4 = {
    Codigo: 'NBLX43',
    Stock: '32',
    Foto: './imgs/43.jpg',
    Precio: 100000,
    Desc: 'Televisor de 43 Pulgadas'
};

let tele5 = {
    Codigo: 'NBLXSM32',
    Stock: '10',
    Foto: './imgs/32.jpg',
    Precio: 72000,
    Desc: 'Televisor SmartTV de 32 Pulgadas'
};

let tele6 = {
    Codigo: 'NBLX40',
    Stock: '43',
    Foto: './imgs/40.jpg',
    Precio: 100000,
    Desc: 'Televisor de 40 Pulgadas'
};

let tele7 = {
    Codigo: 'NBLX80',
    Stock: '6',
    Foto: './imgs/80.jpg',
    Precio: 250000,
    Desc: 'Televisor SmartTV 4K UHD de 80 Pulgadas'
};

let tele8 = {
    Codigo: 'NBLXSM55',
    Stock: '21',
    Foto: './imgs/55.jpg',
    Precio: 199999,
    Desc: 'Televisor SmartTV 4K UHD de 55 Pulgadas'
};

let tele9 = {
    Codigo: 'NBLX24',
    Stock: '43',
    Foto: './imgs/32.jpg',
    Precio: 35000,
    Desc: 'Televisor de 24 Pulgadas'
};


televisores.push(tele1, tele2, tele3, tele4, tele5, tele6, tele7, tele8, tele9);

const Mostrar = () => {
    
    let html = '';

    for (let i = 0; televisores.length > i; i++) {
        html += '<div class="tarjeta">'
        html += '<h1> ID: ' + televisores[i].Codigo + '</h1>';
        html += '<h3> Stock:' + televisores[i].Stock + '</h3>';
        html += '<img src="' + televisores[i].Foto + '" alt="TV NOBLEX">';
        html += '<h2> Precio $ ' + televisores[i].Precio + '</h2>';
        html += '<p>' + televisores[i].Desc + '</p>';
        html += '<button> AÑADIR AL CARRITO </button>';
        html += '</div>'


    document.getElementById('info').innerHTML = html;
}
}
