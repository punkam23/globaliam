import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({ templateUrl: 'admin-layout.component.html', styleUrls: ['./admin-layout.component.css'] })
export class AdminLayoutComponent {

  constructor(
    private router: Router,
  ) {
    this.router.navigate(['/admin/users']);
  }

}
