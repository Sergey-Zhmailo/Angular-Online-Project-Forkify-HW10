import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchResult;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  onGetRecipes(res) {
    this.searchResult = res;
  }

}
