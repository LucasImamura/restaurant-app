import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Burger } from '../interfaces/burger';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {
  private burgerApiUrl = 'http://localhost:8080/hamburger/';

  constructor(private http: HttpClient) {}

  getAllBurgers(): Observable<Burger[]> {
    return this.http.get<Burger[]>(this.burgerApiUrl);
  }

  getBurgerById(id: number): Observable<Burger> {
    return this.http.get<Burger>(`${this.burgerApiUrl}${id}`);
  }

  createBurger(burger: Burger): Observable<Burger> {
    return this.http.post<Burger>(this.burgerApiUrl, burger);
  }
}
