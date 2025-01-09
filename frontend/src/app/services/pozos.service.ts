import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PozosService {
  private apiUrl = 'http://localhost:3000/pozos';

  constructor(private http: HttpClient) {}

  getPozos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPozo(pozo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pozo);
  }

  updateEstado(id: number, estado: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, { estado });
  }
}
