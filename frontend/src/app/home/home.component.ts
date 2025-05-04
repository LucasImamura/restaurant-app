import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { ItemComponent } from '../item/item.component'
import { Item } from '../item'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, ItemComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-item
        *ngFor="let item of itemList"
        [item]="item">
      </app-item>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  itemList: Item[] = [
      {
        id: 0,
        code: 'ING000',
        description: 'Bread',
        unitPrice: 0.20,
        imageUrl: `https://natashaskitchen.com/wp-content/uploads/2024/05/Burger-Buns-4.jpg`,
        itemType: 'INGREDIENT',
        canBeExtra: false
      },
      {
        id: 1,
        code: 'ING001',
        description: 'Cheese',
        unitPrice: 0.25,
        imageUrl: `https://i.ebayimg.com/images/g/wP8AAOSwdPJgLX-d/s-l1200.jpg`,
        itemType: 'INGREDIENT',
        canBeExtra: true
      },
      {
        id: 2,
        code: 'ING002',
        description: 'Burger',
        unitPrice: 2,
        imageUrl: `https://www.shutterstock.com/image-photo/freshly-grilled-burger-meat-isolated-600nw-1100995823.jpg`,
        itemType: 'INGREDIENT',
        canBeExtra: true
      },
      {
        id: 3,
        code: 'ING003',
        description: 'Lettuce',
        unitPrice: 0.10,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyElBQXyDMQbJBXlcqVOw1JjWni3oIlrDPFA&s`,
        itemType: 'INGREDIENT',
        canBeExtra: true
      },
      {
        id: 4,
        code: 'ING004',
        description: 'Tomato',
        unitPrice: 0.20,
        imageUrl: `https://media.istockphoto.com/id/182746000/photo/tomato-slice.jpg?s=612x612&w=0&k=20&c=d5gHGWG13hRNA48PQn_io7tzi3VudgrwBZiJT7rqjVU=`,
        itemType: 'INGREDIENT',
        canBeExtra: true
      },
      {
        id: 5,
        code: 'ING005',
        description: 'Barbecue',
        unitPrice: 0.50,
        imageUrl: `https://carlsbadcravings.com/wp-content/uploads/2020/05/Homemade-Barbecue-Sauce-v14.jpg`,
        itemType: 'INGREDIENT',
        canBeExtra: true
      },
      {
        id: 6,
        code: 'ING006',
        description: 'Mayonnaise',
        unitPrice: 0.40,
        imageUrl: `https://forksandfoliage.com/wp-content/uploads/2022/09/easy-mayonnaise-immersion-blender-1-2.jpg`,
        itemType: 'INGREDIENT',
        canBeExtra: false
      },
      {
        id: 7,
        code: 'BEV003',
        description: 'Coca-Cola',
        unitPrice: 0.7,
        imageUrl: `https://acougueamigos.com/cdn/shop/products/acougue-amigos_33_2_1.jpg?v=1619293870`,
        itemType: 'BEVERAGE',
        hasSugar: true
      },
      {
        id: 8,
        code: 'BEV001',
        description: 'Mountain Dew',
        unitPrice: 0.8,
        imageUrl: `https://m.media-amazon.com/images/I/41i2IM3W6OL.jpg`,
        itemType: 'BEVERAGE',
        hasSugar: true
      },
      {
        id: 9,
        code: 'BEV002',
        description: 'Orange Juice',
        unitPrice: 1,
        imageUrl: `https://m.media-amazon.com/images/I/61j0DTIEtgL.jpg`,
        itemType: 'BEVERAGE',
        hasSugar: true
      }
  ];
}
