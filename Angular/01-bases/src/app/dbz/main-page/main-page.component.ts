import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';


import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1300
  }

 
  agregarNuevoPersonaje(pers: Personaje) {
    // this.personajes.push(pers)
  }

  constructor(){
  }


}
