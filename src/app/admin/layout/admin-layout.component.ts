import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../../_services';

@Component({ templateUrl: 'admin-layout.component.html', styleUrls: ['./admin-layout.component.css'] })
export class AdminLayoutComponent {

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    console.log('test');
    // redirect to home if already logged in
    // if (this.accountService.userValue) {
    //     this.router.navigate(['/']);
    // }
  }

}
