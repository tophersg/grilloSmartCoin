import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

// Ruta de lista de criptomonedas geko
const listaDeCriptos = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
@Injectable()
export class CriptosService {
  constructor(private http: HttpClient) { }
  
  getCriptos(): Observable<any> {
    return this.http.get<any>(listaDeCriptos);
  }

}
