import { AsyncScheduler } from "rxjs/internal/scheduler/AsyncScheduler";
import { asyncScheduler } from 'rxjs';


const sayHello = () => console.log('Hello World');
const sayHelloNamed = name1 => console.log(`Hello ${name1}`);

// asyncScheduler.schedule(sayHello, 2000)
// asyncScheduler.schedule(sayHelloNamed,4000,'Raúl')

//* Exactamente igual que la de arriba, pero en lugar de usar una función de callback existente, ponemos la función cómo argumento, de forma manual
const subs = asyncScheduler.schedule(function (state) {

    console.log('State: ', state);
    this.schedule(state - 1, 1000)

    //? if unsuscribe
    //* Esto funciona, pero vamos a probar con el setTimeout
    // if(state <= 1 ){
    //     this.unsubscribe()
    // }
}, 1000, 10);

//? setTimeout
//* Funciona a la perfección pero vamos a probar con asyncScheduler
// setTimeout(()=> {
//     console.log('bye world');

//     subs.unsubscribe();

// }, 10000)



//? También funciona pero no podemos usar el log que usabamos arriba de la misma forma al ser asyn
asyncScheduler.schedule(() => 
    subs.unsubscribe(), 10000)


