import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private ingredientApiUrl = 'http://localhost:8080/ingredient/';
  private beverageApiUrl = 'http://localhost:8080/beverage/';

  constructor(private http: HttpClient) {}

  getAllIngredients(): Observable<Item[]> {
    return this.http.get<Item[]>(this.ingredientApiUrl);
  }

  getAllBeverages(): Observable<Item[]> {
    return this.http.get<Item[]>(this.beverageApiUrl);
  }

  getIngredientById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.ingredientApiUrl}${id}`);
  }

  getBeverageById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.beverageApiUrl}${id}`);
  }

  createIngredient(item: Item): Observable<Item> {
    return this.http.post<Item>(this.ingredientApiUrl, item);
  }

  createBeverage(item: Item): Observable<Item> {
      return this.http.post<Item>(this.beverageApiUrl, item);
  }
}
