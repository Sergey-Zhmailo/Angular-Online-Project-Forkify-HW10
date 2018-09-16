import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SearchService } from "../../services/search.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/index";
import { map, startWith } from "rxjs/operators";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FavoritesService } from "../../services/favorites.service";
import { SaveHistoryService } from "../../services/save-history.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  saveSearch = false;
  searchHistory = [];
  filteredOptions: Observable<string[]>;

  @Output() getData: EventEmitter<any[]> = new EventEmitter();

  constructor(
    private searchService: SearchService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private favoritesService: FavoritesService,
    private saveHistoryService: SaveHistoryService
  ) { }

  ngOnInit() {
    this.searchService.getSearchHistory().subscribe(res => {
      this.searchHistory = res;
    });
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.saveHistoryService.historyState.subscribe(state => {
      this.saveSearch = state;
    });
  }

  onSearch() {
    this.spinner.show();
    this.searchService.searchRecipe(this.searchControl.value).subscribe(res => {
      if (res.length == 0) this.toastr.info(this.searchControl.value, 'No results of');
      let isDouble = this.searchHistory.some(data => data.name == this.searchControl.value.toLocaleLowerCase());
      if (this.saveSearch && !isDouble) {
        this.searchService.saveSearchHistory(this.searchControl.value);
      }
      this.getData.emit(res);
      this.searchControl.setValue('');
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, 'Error');
    });
  }

  private _filter(value: string) {
    const filterValue = value.toLocaleLowerCase();
    return this.searchHistory.filter(item => item.name.toLocaleLowerCase().includes(filterValue));
  }

}
