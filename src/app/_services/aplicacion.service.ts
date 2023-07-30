import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AplicacionService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getAplicaciones(): Observable<any> {
    const url = '/assets/data/aplicaciones.json';
    return this.http.get(url);
  }
}
