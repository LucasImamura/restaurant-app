import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ItemsService } from '../services/items.service';
import { Item } from '../interfaces/item';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-item-creator',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
template: `
  <div class="item-creator-container">
    <div class="item-list">
      <h2>Item list</h2>
      <ul>
        <li *ngFor="let item of items">
          <strong>{{ item.code }}</strong> - {{ item.description }} ({{ item.unitPrice | currency }})
        </li>
      </ul>
    </div>

    <div class="item-creator-form">
      <h2>Create new item</h2>
      <form (ngSubmit)="onSubmit()" class="form-container">
        <fieldset>
          <legend>Item info</legend>
          <label for="description">Description:</label>
          <input id="description" type="text" [(ngModel)]="newItem.description" name="description" required />

          <label for="code">Code:</label>
          <input id="code" type="text" [(ngModel)]="newItem.code" name="code" required />

          <label for="unitPrice">Unit price:</label>
          <input id="unitPrice" type="number" [(ngModel)]="newItem.unitPrice" name="unitPrice" required />

          <label for="itemType">Item type:</label>
          <select id="itemType" [(ngModel)]="newItem.itemType" name="itemType" required>
            <option value="INGREDIENT">Ingredient</option>
            <option value="BEVERAGE">Beverage</option>
          </select>
        </fieldset>

        <fieldset class="checkbox-options" *ngIf="newItem.itemType === 'INGREDIENT'">
          <legend>Ingredient options</legend>
          <label for="canBeExtra">Can be an extra:</label>
          <input id="canBeExtra" type="checkbox" [(ngModel)]="newItem.canBeExtra" name="canBeExtra" />
        </fieldset>

        <fieldset class="checkbox-options" *ngIf="newItem.itemType === 'BEVERAGE'">
          <legend>Beverage options</legend>
          <label for="hasSugar">Contains sugar:</label>
          <input id="hasSugar" type="checkbox" [(ngModel)]="newItem.hasSugar" name="hasSugar" />
        </fieldset>

        <button type="submit" class="btn-submit">Save</button>
      </form>
    </div>
  </div>
`,
  styleUrl: './item-creator.component.css'
})
export class ItemCreatorComponent implements OnInit {
  items: Item[] = [];
  newItem: Partial<Item> = {
    description: '',
    code: '',
    unitPrice: 0
  };

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    forkJoin({
      ingredients: this.itemsService.getAllIngredients(),
      beverages: this.itemsService.getAllBeverages()
    }).subscribe({
      next: ({ ingredients, beverages }) => {
        const ingredientsWithType = ingredients.map(item => ({ ...item, itemType: 'INGREDIENT' as 'INGREDIENT'}));
        const beveragesWithType = beverages.map(item => ({ ...item, itemType: 'BEVERAGE' as 'BEVERAGE'}));

        this.items = [...ingredientsWithType, ...beveragesWithType];
      },
      error: (error) => {
        console.error('Error loading items:', error);
      }
    });
  }

  private resetForm(): void {
    this.newItem = {
      description: '',
      code: '',
      unitPrice: 0,
      itemType: undefined,
      canBeExtra: false,
      hasSugar: false
    };
  }

  onSubmit(): void {
    const item: Item = {
      description: this.newItem.description as string,
      code: this.newItem.code as string,
      unitPrice: this.newItem.unitPrice as number,
      itemType: this.newItem.itemType as 'INGREDIENT' | 'BEVERAGE',
    };

    if (item.itemType === 'INGREDIENT') {
      item.canBeExtra = this.newItem.canBeExtra ?? false;
      this.itemsService.createIngredient(item).subscribe({
        next: () => {
          this.resetForm();
          this.loadItems();
        },
        error: (error) => {
          console.error('Error creating ingredient:', error);
        }
      });
    } else if (item.itemType === 'BEVERAGE') {
      item.hasSugar = this.newItem.hasSugar ?? false;
      this.itemsService.createBeverage(item).subscribe({
        next: () => {
          this.resetForm();
          this.loadItems();
        },
        error: (error) => {
          console.error('Error creating beverage:', error);
        }
      });
    }
  }
}
