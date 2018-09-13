import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {LoginErrorStateMatcher} from "../login/login.component";

export class SignupErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

  ngOnInit() {
  }

  onSignup() {
    this.auth.signup(this.email, this.password).then(res => {
      this.toastr.success('You are registered', 'Success');
      this.router.navigate(['/']);
    }).catch(err => {
      this.toastr.error(err.message, 'Error')
    });
  }

}
