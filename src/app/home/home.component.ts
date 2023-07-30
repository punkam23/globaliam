import {Component} from '@angular/core';
import {User} from '../_models/user.interface';
import {AccountService} from '../_services/userAuth.service';

@Component({ templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']})
export class HomeComponent {
  user: User | null;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
