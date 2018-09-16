import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList = [];
  recipeId;
  shopListData = [];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe(res => {
      this.shoppingList = res;
    });
  }

}
