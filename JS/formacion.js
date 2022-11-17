//*EJERCICIO 1
//Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ]
  console.log(Object.keys(arrNames));

//*EJERCICIO 2
//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

console.log(arrDirty.filter(i => i))

//*Ejercicio 3
//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]
//CIUDADES DEL ARRAY SIN LAS INDICADAS
let outCities = arrCities.filter(city => (city.country == 'Spain' && city.capital == true) || (city.country != 'Spain') )
console.log(outCities)
//CIUDADES INDICADAS 
let outCities2 = arrCities.filter(city => city.country == 'Spain' ).filter(city => city.capital == false)
console.log(outCities2)

//*Ejercicio 4
//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

let intersectionAux = arrNumber1.filter(v => arrNumber2.includes(v))

let intersection = intersectionAux.filter(v => arrNumber3.includes(v))
console.log(intersection)

//*Ejercicio 5
//Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
//Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

    let notCapitalCities = arrCities2.filter(city =>  city.capital === false).map(city =>({  'city': city.city, 'isSpain': city.country ==='Spain' ? true : false }) )
    console.log( notCapitalCities);
    

// *EJERCICIO 6
// Crea una función que redondee un número float a un número específico de decimales. 
// La función debe tener dos parámetros: 
// Primer parámetro es un número float con x decimales
// Según parámetro es un int que indique el número de decimales al que redondear
// Evitar usar el método toFixed()
// Ejemplo de uso de la función:

function roundTo(num, decimals ) {
    let sign = (num >= 0 ? 1 : -1);
    num = num * sign;
    if (decimals === 0) //con 0 decimals
        return sign * Math.round(num);
    // round(x * 10 ^ decimals)
    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimals) : decimals)));
    // x * 10 ^ (-decimals)
    num = num.toString().split('e');
    return sign * (num[0] + 'e' + (num[1] ? (+num[1] - decimals) : -decimals));
}

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12


const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123457