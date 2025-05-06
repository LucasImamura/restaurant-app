import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="item.imageUrl" alt="image representing a{{item.description}}">
      <h2 class="listing-heading">{{ item.description }}</h2>
      <p class="listing-price">{{ item.unitPrice}}</p>
    </section>
    `,
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: Item;
}
