import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Leitura } from './models/leitura.model';
import { environment } from 'src/environments/environment.prod';
import { timeout, map } from "rxjs/operators";;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeituraService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8080/cliente-wemos/lixeiras/';
  
  public getLeituras() {
    let url = `${environment.apiUrl}cliente-wemos/lixeiras/`;
    return this.http.get<any>(url, httpOptions);
  }

  public deleteLeitura(leitura) {
    let url = `${environment.apiUrl}cliente-wemos/lixeiras/` + leitura.id;
    return this.http.delete<any>(url, httpOptions);
  }

  public createLeitura(leitura) {
    let url = `${environment.apiUrl}cliente-wemos/lixeiras/salvarLeituraJson`;
    return this.http.post<Leitura>(url, leitura, httpOptions);
  }
}
