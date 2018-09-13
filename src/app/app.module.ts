//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';

// Environment
import { environment } from "../environments/environment";

// Services
import { AuthService } from "./services/auth.service";

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ToastrModule } from 'ngx-toastr';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ResetPasswordComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
