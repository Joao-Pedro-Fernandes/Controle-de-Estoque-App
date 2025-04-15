import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peca } from './PecaInterface';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})

export class CadastroPecaService {

  constructor(private http: HttpClient) { }

  postCreatePeca(peca: Peca): Observable<any> {
    return this.http.post(ApiUrl+"/Pecas",peca)
  }

  pesquisarPecas(pesquisa: string): Observable<any[]> {
    return this.http.get<any[]>(`${ApiUrl}/Pecas/ByName=${pesquisa}`)
   }

}
