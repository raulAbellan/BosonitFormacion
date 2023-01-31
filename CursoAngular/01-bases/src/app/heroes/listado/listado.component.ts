import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spider-Man' , 'Ironman' , 'Hulk', 'Thor','Capitán América']
  heroeBorrado:string = '';

  borrarHeroe() : void {
    this.heroeBorrado = this.heroes.pop() || '';
    
  }

}
