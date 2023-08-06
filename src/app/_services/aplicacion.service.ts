import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {AplicacionInterface} from '../admin/aplicacion/aplicacion.interface';
import {map} from "rxjs/operators";

const aplicacionesKey = 'global-iam-aplicaciones';
const aplicacionesLoadedKey = 'global-iam-aplicaciones-loaded';
@Injectable({ providedIn: 'root' })
export class AplicacionService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAplicaciones(): Observable<any> {
    return this.http.get<AplicacionInterface[]>(`${environment.apiUrl}/aplicaciones`).pipe(map(result => {
      const newvalue = result.filter(aplicacion => {
        return aplicacion.status === 'activo';
      });
      return newvalue;
    }));
  }

  public initAplicaciones(): Observable<any> {
    const url = '/assets/data/aplicaciones.json';
    this.http.get(url).subscribe(aplicaciones => {
      if (!localStorage.getItem(aplicacionesLoadedKey)) {
        localStorage.setItem(aplicacionesLoadedKey, 'true');
        localStorage.setItem(aplicacionesKey, JSON.stringify(aplicaciones));
      }
    });
    return of();
  }

  update(id: string, params: AplicacionInterface) {
    return this.http.put(`${environment.apiUrl}/aplicaciones/${id}`, params).subscribe();
  }
}
