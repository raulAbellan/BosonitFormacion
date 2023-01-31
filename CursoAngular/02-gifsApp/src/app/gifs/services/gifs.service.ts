import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'LtyQ27hUPquj2XesREHpgbgP0dqBFO8m'

  private servicioUrl: string = 'http://api.giphy.com/v1/gifs'

  private _historial: string[] = [];

  public resultados: Gif[] = []

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {

    //?Si le digo que me puede devolver un array vacío, puedo omitir la validación con el if marcada en verde
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []

    //* if( localStorage.getItem('historial')){
    //*   this._historial = JSON.parse(localStorage.getItem('historial')!)
    //* }


  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase()
    if (query.trim().length === 0) {
      return
    }
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial))

    }
    const params = new HttpParams().set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;

        localStorage.setItem('resultados', JSON.stringify(this.resultados))

      })
  }

}
