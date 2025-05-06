import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { BurgersService } from '../services/burgers.service';
import { Burger } from '../interfaces/burger';
import { Item } from '../interfaces/item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-burger-creator',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './burger-creator.component.html',
  styleUrls: ['./burger-creator.component.css']
})
export class BurgerCreatorComponent {
  items: Item[] = [];
  burgers: Burger[] = [];
  selectedItems: Item[] = [];
  burgerName: string = '';

  constructor(private burgersService: BurgersService, private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
    this.loadBurgers();
  }

  loadItems(): void {
    this.itemsService.getAllIngredients().subscribe({
      next: (ingredients: Item[]) => {
        this.items = ingredients;
      },
      error: (error) => {
        console.error('Erro ao carregar os ingredientes:', error);
      }
    });
  }

  loadBurgers(): void {
    this.burgersService.getAllBurgers().subscribe({
      next: (burgers) => {
        this.burgers = burgers;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erro ao carregar os hambúrgueres:', error);
      }
    });
  }

  addItemToBurger(item: Item): void {
    if (!this.selectedItems.some(selectedItem => selectedItem.id === item.id)) {
      this.selectedItems.push(item);
    } else {
      alert('Este item já foi adicionado ao hambúrguer.');
    }
  }

  removeItemFromBurger(item: Item): void {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
  }

  saveBurger(): void {
    if (this.burgerName && this.selectedItems.length > 0) {
      const newBurger: Partial<Burger> = {
        code: this.burgerName.toLowerCase().replace(/\s+/g, '-'),
        description: this.burgerName,
        unitPrice: this.selectedItems.reduce((total, item) => total + item.unitPrice, 0),
        ingredients: this.selectedItems
      };

      this.burgersService.createBurger(newBurger as Burger).subscribe({
        next: (burger) => {
          console.log('Hambúrguer criado com sucesso:', burger);
          this.resetForm();
          this.loadBurgers();
        },
        error: (error) => {
          console.error('Erro ao criar o hambúrguer:', error);
        }
      });
    } else {
      alert('Por favor, insira um nome e selecione ao menos um ingrediente.');
    }
  }

  private resetForm(): void {
    this.burgerName = '';
    this.selectedItems = [];
  }
}
