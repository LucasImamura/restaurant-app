import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ItemComponent } from '../item/item.component'
import { Item } from '../item'
import { ItemsService } from '../items.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatIconModule, MatButtonModule, ItemComponent],
  template: `
  <div class="home-container">
    <div class="presentation-group">
      <h1>Welcome to Burger Overflow!</h1>
      <p>Please, tell us what would you like to do:</p>
    </div>
    <div class="button-group">
      <button mat-raised-button color="shadow" routerLink="/create-item">
        <mat-icon class="button-icon">add</mat-icon>
        Register items
      </button>
      <button mat-raised-button color="shadow" routerLink="/create-burger">
        <mat-icon class="button-icon">lunch_dining</mat-icon>
        Register burgers
      </button>
      <button mat-raised-button color="shadow" routerLink="/create-order">
        <mat-icon class="button-icon">shopping_cart</mat-icon>
        Make an order
      </button>
    </div>
  </div>
  <!--
    <section>
      <form>
        <input type="text" placeholder="Filter by name" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
    <!--
      <app-item
        *ngFor="let item of itemList"
        [item]="item">
      </app-item>
     <app-item></app-item>
    </section>
  -->
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /*
  itemList: Item[] = [];
  itemsService: ItemsService = inject(ItemsService);

  constructor() {
    this.itemList = this.itemsService.getAllItems();
   }
 */

 constructor() {}
}
