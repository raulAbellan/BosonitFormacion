import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'LtyQ27hUPquj2XesREHpgbgP0dqBFO8m'

  private _historial: string[] = [];

  public resultados: Gif[] = []

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) { }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase()
    if (query.trim().length === 0) {
      return
    }
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10)
    }

    this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=LtyQ27hUPquj2XesREHpgbgP0dqBFO8m&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;


      })
    console.log(this._historial);
  }

}
