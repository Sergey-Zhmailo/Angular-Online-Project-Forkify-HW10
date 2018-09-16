import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { FavoritesService } from "../../services/favorites.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnChanges {
  @Input('result') searchResult;
  favoritesList = [];
  showRecipes = [];
  recipesPerPage = 10;
  currentPage = 1;
  pages = 0;


  constructor(
    private favoritesService: FavoritesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.favoritesService.getFavoritesList().subscribe(res => {
      this.favoritesList = res;
    });
  }


  ngOnChanges() {
    this.pages = Math.ceil(this.searchResult.length / this.recipesPerPage);
    this.showPage();

  }

  addToFavorites(item) {
    let isDouble = this.favoritesList.some(data => data.recipe_id == item.recipe_id);
    if (!isDouble) {
      this.favoritesService.saveFavorites(item);
      this.toastr.success('Recipe added to favorives list', 'Success');
    } else {
      this.toastr.info('Recipe already in your favorites', 'Info');
    }
  }

  showPage(page: number = 1) {
    this.currentPage = page;
    const start = (page - 1) * this.recipesPerPage;
    const end = page * this.recipesPerPage;
    this.showRecipes = this.searchResult.slice(start, end);
    console.log(this.showRecipes);
  }

}
