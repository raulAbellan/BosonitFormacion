import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',

})
export class HeroeComponent{
  nombre: string = 'Ironman'
  edad:number = 45

  get nombreCapitalizado() : string{
    return this.nombre.toUpperCase();
  }
  obtenerDatos():string {
    return `${this.nombre} - ${this.edad}`    
  }
  cambiarNombre() : void {
    this.nombre = 'Spider-Man';

  }
  cambiarEdad() : void {
    this.edad = 30
  }
}
