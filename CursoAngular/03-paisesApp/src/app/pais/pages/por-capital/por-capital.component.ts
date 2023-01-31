import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = ''
  hayError: boolean = false;
  paises: Pais[] = []
  capText: string= "Por capital..."

  constructor(private paisService: PaisService) {

  }
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(paises => {
      console.log(paises);
      this.paises = paises;


    }, (err) => {
      this.hayError = true;
      this.paises = []



    })

  }
  sugerencias(termino: string) {
    this.hayError = false;

  }

}
