import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  CharacterInfo } from './character.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private urlAll          : string = "https://rickandmortyapi.com/api/character?name="
  private urlHuman     : string = "https://rickandmortyapi.com/api/character?species=human&name=";
  private urlAlien     : string = "https://rickandmortyapi.com/api/character?species=alien&name=";
  private urlRobot     : string = "https://rickandmortyapi.com/api/character?species=robot&name=";
  private urlAnimal    : string = "https://rickandmortyapi.com/api/character?species=animal&name=";
  private urlMithologic: string = "https://rickandmortyapi.com/api/character?species=Mythological creature&name=";
  

  constructor(private http:HttpClient) { }
  

  search(term: string):Observable<CharacterInfo>{
    const url = `${this.urlAll}${term}`;
    return this.http.get<CharacterInfo>(url);
  }

  searchHuman(term: string):Observable<CharacterInfo>{
    const url = `${this.urlHuman}${term}`;
    return this.http.get<CharacterInfo>(url);
  }
  searchAlien(term: string):Observable<CharacterInfo>{
    const url = `${this.urlAlien}${term}`;
    return this.http.get<CharacterInfo>(url);
  }
  searchRobot(term: string):Observable<CharacterInfo>{
    const url = `${this.urlRobot}${term}`;
    return this.http.get<CharacterInfo>(url);
  }
  searchAnimal(term: string):Observable<CharacterInfo>{
    const url = `${this.urlAnimal}${term}`;
    return this.http.get<CharacterInfo>(url);
  }
  searchMithologic(term: string):Observable<CharacterInfo>{
    const url = `${this.urlMithologic}${term}`;
    return this.http.get<CharacterInfo>(url);
  }
}
