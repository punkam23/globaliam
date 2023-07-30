import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PermisoService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getPermisos(): Observable<any> {
    const url = '/assets/data/permisos.json';
    return this.http.get(url);
  }
}
