import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AccountService} from '../../_services';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({ templateUrl: 'admin-layout.component.html', styleUrls: ['./admin-layout.component.css'] })
export class AdminLayoutComponent implements AfterViewInit {
  @ViewChild('userTab', {static: false}) userTab: MatButton;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    if (this.accountService.userValue) {
      this.router.navigate(['/admin/users']);
    }
  }

  ngAfterViewInit() {
    this.userTab.focus();
  }

}
