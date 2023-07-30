import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getUsers(): Observable<any> {
    const url = '/assets/data/users.json';
    return this.http.get(url);
  }
}
