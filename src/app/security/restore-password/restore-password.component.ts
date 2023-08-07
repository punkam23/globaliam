import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../_services';
import {first} from 'rxjs/operators';
import {AlertService} from '../../_services/alert.service';

@Component({ templateUrl: 'restore-password.component.html',  styleUrls: ['./restore-password.component.css'], })
export class RestorePasswordComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  userId = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
    this.form = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.confirmpassword !== this.form.value.newpassword) {
      this.alertService.error('Las contraseñas no coinciden.');
      return;
    }

    this.loading = true;
    const param = {
      password : this.form.value.newpassword
    };
    this.accountService.updatepass(this.userId, param);
    this.router.navigate(['/security/login']);
  }
}
