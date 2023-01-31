import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC',];
  regionActiva: string = '';
  paises: Pais[] = [];
  constructor(private paisService: PaisService) { }
  activarRegion(region: string) {
    if (region === this.regionActiva){return}
    this.paises = []
    this.regionActiva = region;

    this.paisService.buscarPorRegión(region)
      .subscribe(paises => {
        this.paises = paises
      })



  }

}
