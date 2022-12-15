import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'rAúL aBeLlAn'
  valor: number = 9854789
  obj: object = {
    Nombre: "Kiara",
    Reponsable: "Raúl Ab",
    Color: "Blanco/Negro"
  }
  logNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);

  }
}
