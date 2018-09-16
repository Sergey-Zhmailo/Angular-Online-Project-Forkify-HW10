import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}


  canActivate(): boolean {
    if (!this.auth.isAuthEmail) {
      console.log('guard', this.auth.isAuthEmail);
      this.router.navigate(['login']);
      return false;
    } else {
      console.log('guard2', this.auth.isAuthEmail);
      return true;
    }

  }
}
