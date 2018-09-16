import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { Observable } from "rxjs/index";
import { ShoppingListService } from "../../services/shopping-list.service";

interface RecipeDetails {
  recipe: {
    image_url: string,
    ingredients: string[],
    publisher: string,
    publisher_url: string,
    recipe_id: string,
    social_rank: number,
    source_url: string,
    title: string
  }
}
// interface SelectedIngredients {
//   ingredients: string[],
//   recipe_id: string
// }

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id: string;
  recipe;
  ingredientsList: Observable<string[]>;
  selectedIngredients;


  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipe(this.id).subscribe((res: RecipeDetails) => {
        this.recipe = res.recipe;
        this.ingredientsList = new Observable(observer => {
          observer.next(res.recipe.ingredients);
          console.log('resdet', this.recipe);
        });
      });
  }

  onAddToShoppingList(id, title) {
    console.log(this.selectedIngredients);
    console.log(id);
    this.shoppingListService.addToShoppingList(this.selectedIngredients, id, title);
  }
  selectIngredientChange(event){
    console.log('on ng model change', event);
  }

}
