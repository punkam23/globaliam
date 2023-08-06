import {Component, OnInit} from '@angular/core';
import {User} from './_models/user.interface';
import {AccountService} from './_services/userAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }

  ngOnInit(): void {
    // console.log('test');
  }
}
