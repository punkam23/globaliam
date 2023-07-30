import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RolService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getRoles(): Observable<any> {
    const url = '/assets/data/roles.json';
    return this.http.get(url);
  }
}
