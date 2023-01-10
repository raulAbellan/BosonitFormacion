import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false;
  paises: Pais[] = []
  paisesSugeridos: Pais[] = []
  constructor(private paisService: PaisService) {

  }
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(paises => {
      console.log({ paises });
      this.paises = paises;


    }, (err) => {
      this.hayError = true;
      this.paises = []



    })

  }
  sugerencias(termino: string) {
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0, 4),
      (err) => this.paisesSugeridos = [])

  }

}
