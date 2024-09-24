import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class TrackingService {
  private readonly _http = inject(HttpClient);

  getBaptisteGoApi(): Observable<any> {
    return this._http.get('http://localhost:5050/');
  }
}
