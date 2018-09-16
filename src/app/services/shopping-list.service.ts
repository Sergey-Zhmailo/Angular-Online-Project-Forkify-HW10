import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/internal/operators";

interface IngredientsDB {
  ingredients: string[],
  recipe_id: string
}


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private shoppingList: AngularFirestoreCollection;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.shoppingList = this.afs.collection('shopping-list');
  }

  getShoppingList() {
    return this.shoppingList.snapshotChanges().pipe(
      map(actions => actions.map(item => {
        const data = item.payload.doc.data();
        return { ...data };
      }))
    )
  }

  addToShoppingList(value, id, title) {
    return this.shoppingList.add({ingredients: value, recipe_id: id, title: title});
  }

  deleteFromShoppingList() {
  }
}
