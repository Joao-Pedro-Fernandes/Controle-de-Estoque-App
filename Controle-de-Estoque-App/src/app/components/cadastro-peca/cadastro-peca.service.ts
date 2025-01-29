import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peca } from './PecaInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroPecaService {

  apiUrl = 'https://localhost:7220/Pecas';

  constructor(private http: HttpClient) { }

  postCreatePeca(peca: Peca): Observable<any> {
    return this.http.post(this.apiUrl,peca)
  }

}
