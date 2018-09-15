import { Component, OnInit } from '@angular/core';
import { FavoritesService } from "../../services/favorites.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoritesList = [];

  constructor(
    private favoritesService: FavoritesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.favoritesService.getFavoritesList().subscribe(res => {
      this.favoritesList = res;
      console.log(this.favoritesList);
    });

  }

}
