import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // @Input('data') personajes:Personaje[] = []

  get getPersonajes() {
    return this.dbzService.getPersonajes;
  }

  constructor(private dbzService: DbzService) {

  }
}
