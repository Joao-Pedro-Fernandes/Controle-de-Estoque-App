import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peca } from '../cadastro-peca/PecaInterface';

@Injectable({
  providedIn: 'root'
})
export class WindowEditPecaService {
  apiUrl = 'https://localhost:7220/Pecas';

  constructor(private htpp: HttpClient) { }

  updatePeca(peca: Peca): Observable<any> {
    return this.htpp.put<any>(this.apiUrl, peca);
  }

  deletePeca(id: number): Observable<any> {
    return this.htpp.delete<any>(`${this.apiUrl}/${id}`);
  }


}
