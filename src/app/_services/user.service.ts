import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_models';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {UserInterface} from '../admin/user/user.interface';

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

  getAll(): Observable<any> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(map(users => {
      const userInterfaceList = [];
      users.forEach(user => {
        const userInterface: UserInterface = {
          id: user.id,
          email: user.username,
          name: user.firstName,
          apellidos: user.lastName,
          status: user.state
        };
        userInterfaceList.push(userInterface);
      });
      return userInterfaceList;
    }));
  }
}
