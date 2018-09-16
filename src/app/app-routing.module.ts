import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import {  SettingsComponent} from "./components/settings/settings.component";
import { AuthGuard } from "./guards/auth.guard";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
