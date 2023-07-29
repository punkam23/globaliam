import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountService } from "../../_services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-forgotpass",
  templateUrl: "./forgotpass.component.html",
  styleUrls: ["./forgotpass.component.css"],
})
export class ForgotpassComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  showNotification: boolean = false;
  notificationMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onInputChange() {
    this.submitted = false;
  }

  onSubmit() {
    // Simulación de recuperación de contraseña exitosa
    const recoverySuccess = true;

    if (recoverySuccess) {
      this.showNotification = true;
      this.notificationMessage =
        "Correo de recuperación enviado correctamente.";
    } else {
      this.showNotification = true;
      this.notificationMessage =
        "Ha ocurrido un error al enviar el correo de recuperación.";
    }
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .forgotpass(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = "/";
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          // this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
