import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peca } from '../cadastro-peca/PecaInterface';
import { ApiUrl } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WindowEditPecaService {

  constructor(private http: HttpClient) { }

  updatePeca(peca: Peca): Observable<any> {
    return this.http.put<any>(ApiUrl+"/Pecas", peca);
  }

  deletePeca(id: number): Observable<any> {
    return this.http.delete<any>(`${ApiUrl}/Pecas/${id}`);
  }

  pesquisarPecas(pesquisa: string): Observable<any[]> {
    return this.http.get<any[]>(`${ApiUrl}/Pecas/ByName=${pesquisa}`)
  }


}
