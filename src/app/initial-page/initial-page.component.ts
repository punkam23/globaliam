import {Component} from '@angular/core';
import {AccountService} from '../_services';
import {Router} from '@angular/router';

@Component({ templateUrl: 'initial-page.component.html',
  styleUrls: ['./initial-page.component.css']})
export class InitialPageComponent {

  constructor(private accountService: AccountService, private router: Router) {
    if (this.accountService.userValue) {
      this.router.navigate(['/home']);
    }
  }
}
