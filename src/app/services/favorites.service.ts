import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { map } from "rxjs/internal/operators";
import {HttpClient} from "@angular/common/http";

interface FavoritesDB {
  f2f_url: string,
  image_url: string,
  publisher: string,
  publisher_url: string,
  recipe_id: string,
  social_rank: number,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteRecipe: AngularFirestoreCollection;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.favoriteRecipe = this.afs.collection('favorites');
  }

  saveFavorites(value: FavoritesDB) {
    return this.favoriteRecipe.add(
      {
        recipe_id: value.recipe_id,
        f2f_url: value.f2f_url,
        image_url: value.image_url,
        publisher: value.publisher,
        publisher_url: value.publisher_url,
        social_rank: value.social_rank,
        title: value.title
      });
  }

  getFavoritesList() {
    return this.favoriteRecipe.snapshotChanges().pipe(
      map(actions => actions.map(item => {
        const data = item.payload.doc.data();
        return { ...data }
      }))
    )
  }

}


