import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class InitialPageService {

  constructor(private http: HttpClient) { }

  getAllPecas(): Observable<any[]> {
    return this.http.get<any[]>(ApiUrl+"/Pecas");
  }

}
