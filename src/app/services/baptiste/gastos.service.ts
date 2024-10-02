import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GastoDTO } from './dto/gasto.dto';
import { GastosDTO } from './dto/gastos.dto';

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

  // Consumir todos los gatos registrados en la base de datos.
  getAllGastos(): Observable<any> {
    return this.http.get<GastosDTO>(this.apiUrl);
  }

  // Editar gasto.
  updateGasto(gasto: GastosDTO): Observable<any> {
    return this.http.put<any>(this.apiUrl, gasto)
  }

  // Consultar gasto por medio de su ID.
  getGastoByID(id: string): Observable<any> {
    return this.http.get<GastosDTO>(`${this.apiUrl}/${id}`);
  }

  // Eliminar un gasto.
  deleteGasto(id: string): Observable<any> {
    console.log('id recibido: ',id)
    return this.http.delete<string>(`${this.apiUrl}/delete/${id}`);
  }
}
