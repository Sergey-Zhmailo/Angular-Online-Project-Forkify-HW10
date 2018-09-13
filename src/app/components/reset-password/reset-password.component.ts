import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {LoginErrorStateMatcher} from "../login/login.component";

export class ResetErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  matcher = new LoginErrorStateMatcher();

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onResetPassword() {
    this.auth.resetPassword(this.email).then(res => {
      this.toastr.success('New password sended', 'Success');
      this.router.navigate(['login']);
    }).catch(err => {
      this.toastr.error(err.message, 'Error')
    });
  }

}
