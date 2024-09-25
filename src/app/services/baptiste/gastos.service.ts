import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GastoDTO } from './dto/gasto.dto';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private apiUrl = 'http://localhost:5050/gastos';

  constructor(private http: HttpClient) { }

  // Crear gasto.
  crearGasto(gasto: GastoDTO): Observable<any> {
    return this.http.post<any>(this.apiUrl, gasto)
  }
}
