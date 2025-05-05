import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ItemComponent } from '../item/item.component'
import { Item } from '../interfaces/item'
import { ItemsService } from '../services/items.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatIconModule, MatButtonModule, ItemComponent],
  templateUrl: './home.component.html',
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
