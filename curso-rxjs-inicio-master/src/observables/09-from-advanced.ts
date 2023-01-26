import { of, from } from "rxjs";
//? of toma los argumentos y genera una secuencia de valores
//* from por su parte crea un observable en base a (array, object, promise, iterable, otro observable)

const myObserver = {
    next: val => console.log('Next:', val),
    complete: () => console.log('Complete')   
    
};

//?EJEMPLOS from y of
// const sources$ = from([1,2,3,4,5])

// const sources$ = of([1,2,3,4,5])

// const sources$ = of ('Raul')
 
// const sources$ = from ('Raul')

//*Ejemplo con fecth (asyn y await) para traer con una promesa la data de una respuesta http:

// const sources$ = from( fetch('https://api.github.com/users/klerith'))

// sources$.subscribe(async (resp) =>{
//     console.log(resp);

//    const dataResp = await resp.json()
//    console.log(dataResp);
   
    
// });
const myGenerartor =  function*(){

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterator = myGenerartor();
//? forma mas sencilla de iterar pero que no nos permite ver el next o el complete, no es una función rxjs
// for (let id of myIterator){
//     console.log(id);
    
// }


from(myIterator).subscribe(myObserver)



// setTimeout(()=>sources$.subscribe(myObserver),5000)
