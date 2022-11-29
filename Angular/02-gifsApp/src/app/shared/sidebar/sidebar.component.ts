import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gif } from '../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor( private gifsService:GifsService){}
  get historial():string[] {
    return this.gifsService.historial
  }
  buscar(termino :string){
    return this.gifsService.buscarGifs(termino)
 }
}
