import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  private apiUrlv2:string ='https://restcountries.com/v2'

  constructor(private http: HttpClient,) { }

  buscarPais(termino: string): Observable<Pais[]> {
    const params = new HttpParams().set('fields','cca2,flags,translations,capital,population')

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, {params});
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const params = new HttpParams().set('fields','cca2,flags,translations,capital,population')

    const url = `${this.apiUrl}/capital/${termino}`; 
    return this.http.get<Pais[]>(url,{params});
  }
  getPaisPorAlpha(id: string): Observable<Pais> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais[]>(url).pipe(
      map((paises) => paises[0]),
    );

  }

  buscarPorRegión(region: string): Observable<Pais[]> {
    const params = new HttpParams().set('fields','altSpellings,flags,translations,capital,population')
    const url = `${this.apiUrlv2}/regionalbloc/${region}`;
    return this.http.get<Pais[]>(url,{params})

  }


}
