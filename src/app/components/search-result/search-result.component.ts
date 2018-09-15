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

}
