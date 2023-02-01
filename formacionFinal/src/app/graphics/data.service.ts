import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataCovid } from './data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<DataCovid>{
    return this.http.get<DataCovid>('https://api.covidtracking.com/v1/us/daily.json')
  }
}
