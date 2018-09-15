import { Injectable } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth"
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient
  ) { }

  public get isAuth() {
    return this.afAuth.auth.currentUser
  }


  login(email, password): Promise<any> {
    console.log(this.afAuth.auth.currentUser);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email, password): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  resetPassword(email): Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}
