import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {Observable} from "rxjs/index";

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl('', [
    Validators.minLength(6),
    Validators.required
  ]);

  matcher = new LoginErrorStateMatcher();

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() { }

  onLogin() {
    this.auth.login(this.email, this.password).then(res => {
      this.toastr.success('You are logged in', 'Success');
      this.router.navigate(['/']);
    }).catch(err => {
      this.toastr.error(err.message, 'Error')
    });
  }

}
