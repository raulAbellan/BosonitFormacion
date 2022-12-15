import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient,) { }

  buscarPais(termino:string) : Observable<Pais[]>{
     
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino:string) : Observable<Pais[]>{
     
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }
  getPaisPorAlpha(id:string) : Observable<Pais>{
     
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais[]>(url).pipe(      
      map((paises) => paises[0]),
    );
    
  }


}
