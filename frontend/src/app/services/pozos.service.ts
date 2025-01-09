import { Injectable } from '@angular/core';
//HttpClient para enviar solicitudes al backend
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PozosService {
  private apiUrl = 'http://localhost:3000/pozos';

  constructor(private http: HttpClient) {}

  //Obtener la lista de todos los pozos
  getPozos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //Añadir un nuevo pozo a la lista
  addPozo(pozo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pozo);
  }

  //Cambiar estado de un pozo
  updateEstado(id: number, estado: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, { estado });
  }
}
