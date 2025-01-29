import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialPageService {

  apiUrl = 'https://localhost:7220/Pecas';

  constructor(private http: HttpClient) { }

  getAllPecas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
