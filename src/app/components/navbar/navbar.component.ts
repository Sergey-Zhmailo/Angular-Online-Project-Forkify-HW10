import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { SwitchLanguageService } from "../../services/switch-language.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private switchLanguageService: SwitchLanguageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.switchLanguageService.setDefaultLanguage();
    this.authService.isAuth();
  }

  public get authEmail() {
    return this.authService.isAuth();
  }

  onLogout() {
    this.authService.logout();
  }

}
