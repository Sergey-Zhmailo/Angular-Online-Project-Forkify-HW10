import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private auth: AuthService,
//     private router: Router
//   ) {}


  // canActivate(): boolean {
  //   if () {
  //     this.router.navigate(['login']);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
// }
