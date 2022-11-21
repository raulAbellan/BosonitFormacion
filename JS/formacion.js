//*EJERCICIO 1
//Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
  { id: 1, name: 'Pepe' },
  { id: 2, name: 'Juan' },
  { id: 3, name: 'Alba' },
  { id: 4, name: 'Toby' },
  { id: 5, name: 'Lala' }
]
console.log(Object.keys(arrNames));

//*EJERCICIO 2
//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test']

console.log(arrDirty.filter(i => i))

//*Ejercicio 3
//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
const arrCities = [
  { city: 'Logroño', country: 'Spain', capital: false },
  { city: 'Paris', country: 'France', capital: true },
  { city: 'Madrid', country: 'Spain', capital: true },
  { city: 'Rome', country: 'Italy', capital: true },
  { city: 'Oslo', country: 'Norway', capital: true },
  { city: 'Jaén', country: 'Spain', capital: false }
]
//CIUDADES DEL ARRAY SIN LAS INDICADAS
let outCities = arrCities.filter(city => (city.country == 'Spain' && city.capital == true) || (city.country != 'Spain'))
console.log(outCities)
//CIUDADES INDICADAS 
let outCities2 = arrCities.filter(city => city.country == 'Spain').filter(city => city.capital == false)
console.log(outCities2)

//*Ejercicio 4
//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

let intersectionAux = arrNumber1.filter(v => arrNumber2.includes(v))

let intersection = intersectionAux.filter(v => arrNumber3.includes(v))
console.log(intersection)

//*Ejercicio 5
//Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
//Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [
  { city: 'Logroño', country: 'Spain', capital: false },
  { city: 'Bordeaux', country: 'France', capital: false },
  { city: 'Madrid', country: 'Spain', capital: true },
  { city: 'Florence', country: 'Italy', capital: true },
  { city: 'Oslo', country: 'Norway', capital: true },
  { city: 'Jaén', country: 'Spain', capital: false }
]

let notCapitalCities = arrCities2.filter(city => city.capital === false).map(city => ({ 'city': city.city, 'isSpain': city.country === 'Spain' ? true : false }))
console.log(notCapitalCities);


// *EJERCICIO 6
// Crea una función que redondee un número float a un número específico de decimales. 
// La función debe tener dos parámetros: 
// Primer parámetro es un número float con x decimales
// Según parámetro es un int que indique el número de decimales al que redondear
// Evitar usar el método toFixed()
// Ejemplo de uso de la función:

function roundTo(num, decimals) {
  let sign = (num >= 0 ? 1 : -1);
  num = num * sign;
  if (decimals === 0) //con 0 decimals
    return sign * Math.round(num);
  // round(x * 10 ^ decimals)
  num = num.toString().split('e'); //pasamos a string la potencia y le hacemos split para quitarla despues
  num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimals) : decimals)));
  // x * 10 ^ (-decimals)
  num = num.toString().split('e');
  return sign * (num[0] + 'e' + (num[1] ? (+num[1] - decimals) : -decimals));
}

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12


const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123457

// *Ejercicio 7
// Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
// La fundación debe tener dos parámetros:
// Primer parámetro es un objeto con x número de campos y valores
// Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
//Ejemplo de uso de la función:

const returnFalsyValues = (obj, funct) => {

  //Creamos un objeto nuevo en el que almacenar las claves y valores
  const newObj = {};

  //creamos una constante para almacenar las claves
  const keys = Object.keys(obj);

  //recorremos las claves
  for (let i = 0; i < keys.length; i++) {

    if (!funct(obj[keys[i]])) {
      //asignamos los valores falsos a nuestro nuevo objeto
      newObj[keys[i]] = obj[keys[i]]
    }
  }
  return newObj;
}


const result = returnFalsyValues({ a: true, b: null, c: 'string' }, x => typeof x === 'string')

console.log(result);// {a: 1, c: 3}


// **Ejercicio 8
// Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// Primer parámetro debe ser el número de bytes
// Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.


function fromBytesToFormattedSizeUnits(bytes, decimals = 3) {

  {
    if (bytes >= 1000000000000000000000000 || bytes <= -1000000000000000000000000) { bytes = (bytes / 1000000000000000000000000).toPrecision(decimals) + "YB"; }
    else if (bytes >= 1000000000000000000000 || bytes <= -1000000000000000000000) { bytes = (bytes / 1000000000000000000000).toPrecision(decimals) + "ZB"; }
    else if (bytes >= 1000000000000000000 || bytes <= -1000000000000000000) { bytes = (bytes / 1000000000000000000).toPrecision(decimals) + "EB"; }
    else if (bytes >= 1000000000000000 || bytes <= -1000000000000000) { bytes = (bytes / 1000000000000000).toPrecision(decimals) + "PB"; }
    else if (bytes >= 1000000000000 || bytes <= -1000000000000) { bytes = (bytes / 1000000000000).toPrecision(decimals) + "TB"; }
    else if (bytes >= 1000000000 || bytes <= -1000000000) { bytes = (bytes / 1000000000).toPrecision(decimals) + " GB"; }
    else if (bytes >= 1000000 || bytes <= -1000000) { bytes = (bytes / 1000000).toPrecision(decimals) + " MB"; }
    else if (bytes >= 1000 || bytes <= -1000) { bytes = (bytes / 1000).toPrecision(decimals) + " KB"; }
    else if (bytes > 1 || bytes < -1) { bytes = bytes + " B"; }
    else if (bytes == 1 || bytes == -1) { bytes = bytes + " B"; }
    else if (bytes == 0) { bytes = "0 B"; }
    else if (bytes == -1) { bytes = bytes + " B"; }
    return bytes;
  }


}
function fromBytesToFormattedSizeUnits2(bytes, decimals = 3) {
  switch (bytes) {
    case bytes >= 1000000000000000000000000 || bytes <= -1000000000000000000000000:
      bytes = (bytes / 1000000000000000000000000).toPrecision(decimals) + "YB"
      break;
    case bytes >= 1000000000000000000000 || bytes <= -1000000000000000000000:
      bytes = (bytes / 1000000000000000000000).toPrecision(decimals) + "ZB"
      break;
    case bytes >= 1000000000000000000 || bytes <= -1000000000000000000:
      bytes = (bytes / 1000000000000000000).toPrecision(decimals) + "EB"
      break;
    case bytes >= 1000000000000000 || bytes <= -1000000000000000:
      bytes = (bytes / 1000000000000000).toPrecision(decimals) + "PB"
      break;
    case bytes >= 1000000000000 || bytes <= -1000000000000:
      bytes = (bytes / 1000000000000).toPrecision(decimals) + "TB"
      break;
    case bytes >= 1000000000 || bytes <= -1000000000:
      bytes = (bytes / 1000000000).toPrecision(decimals) + " GB"
      break;
    case bytes >= 1000000 || bytes <= -1000000:
      bytes = (bytes / 1000000).toPrecision(decimals) + " MB"
      break;
    case bytes >= 1000 || bytes <= -1000:
      bytes = (bytes / 1000).toPrecision(decimals) + " KB"
      break;
    case bytes > 1 || bytes < -1:
      bytes = bytes + " B"
      break;
    case bytes == 1 || bytes == -1:
      bytes = bytes + " B"
      break;
    case bytes == 0:
      bytes = "0 B"
      break;
    case bytes == -1:
      bytes = bytes + " B"
      break;
    default:
      console.log("introduce un valor numérico");
      break;
  }
}
//Ejemplo de uso de la función:
const result2 = fromBytesToFormattedSizeUnits2(1000);
console.log(result2); // 1KB

const result3 = fromBytesToFormattedSizeUnits(123456789);
console.log(result3); // 123MB

const result4 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result4); // -12.145GB

//* Ejercicio 9
// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.
// Ejemplo de uso de la función:

function toLowercaseKeys(obj){

  const entries = Object.entries(obj);

  return Object.fromEntries(
    entries.map(([key, value]) => {
      return [key.toLowerCase(), value];
    }),
  );

}
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }




