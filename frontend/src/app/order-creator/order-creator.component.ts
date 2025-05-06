import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../services/orders.service';
import { BurgersService } from '../services/burgers.service';
import { ItemsService } from '../services/items.service';
import { Burger } from '../interfaces/burger';
import { Item } from '../interfaces/item';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-order-creator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './order-creator.component.html',
  styleUrls: ['./order-creator.component.css']
})
export class OrderCreatorComponent implements OnInit {
  orders: Order[] = [];
  burgers: Burger[] = [];
  beverages: Item[] = [];
  selectedBurgers: Burger[] = [];
  selectedBeverages: Item[] = [];
  description: string = '';
  code: string = '';
  clientName: string = '';
  clientAddress: string = '';
  clientTelephone: string = '';
  observations: string = '';

  constructor(
    private ordersService: OrdersService,
    private burgersService: BurgersService,
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.loadBurgers();
    this.loadBeverages();
    this.loadOrders();
  }

  loadOrders(): void {
    this.ordersService.getAllOrders().subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (error) => {
        console.error('Erro ao carregar os pedidos:', error);
      }
    });
  }

  loadBurgers(): void {
    this.burgersService.getAllBurgers().subscribe({
      next: (burgers) => {
        this.burgers = burgers;
      },
      error: (error) => {
        console.error('Erro ao carregar os hambúrgueres:', error);
      }
    });
  }

  loadBeverages(): void {
    this.itemsService.getAllBeverages().subscribe({
      next: (beverages) => {
        this.beverages = beverages;
      },
      error: (error) => {
        console.error('Erro ao carregar as bebidas:', error);
      }
    });
  }

  addBurgerToOrder(burger: Burger): void {
    if (!this.selectedBurgers.some(selected => selected.id === burger.id)) {
      this.selectedBurgers.push(burger);
    } else {
      alert('Este hambúrguer já foi adicionado ao pedido.');
    }
  }

  addBeverageToOrder(beverage: Item): void {
    if (!this.selectedBeverages.some(selected => selected.id === beverage.id)) {
      this.selectedBeverages.push(beverage);
    } else {
      alert('Esta bebida já foi adicionada ao pedido.');
    }
  }

  removeBurgerFromOrder(burger: Burger): void {
    this.selectedBurgers = this.selectedBurgers.filter(selected => selected.id !== burger.id);
  }

  removeBeverageFromOrder(beverage: Item): void {
    this.selectedBeverages = this.selectedBeverages.filter(selected => selected.id !== beverage.id);
  }

  getOrderTotalPrice(order: Order): number {
    const burgersTotal = Array.isArray(order.burgers)
      ? order.burgers.reduce((sum, burger) => sum + burger.unitPrice, 0)
      : 0;

    const beveragesTotal = Array.isArray(order.beverages)
      ? order.beverages.reduce((sum, beverage) => sum + beverage.unitPrice, 0)
      : 0;

    return parseFloat((burgersTotal + beveragesTotal).toFixed(2));
  }

  saveOrder(): void {
    if (this.clientName && this.clientAddress && this.clientTelephone) {
      const newOrder: Partial<Order> = {
        description: this.description,
        code: this.code,
        clientName: this.clientName,
        clientAddress: this.clientAddress,
        clientTelephone: this.clientTelephone,
        burgers: this.selectedBurgers,
        beverages: this.selectedBeverages,
        observations: this.observations
      };

      this.ordersService.saveOrder(newOrder).subscribe({
        next: () => {
          alert('Pedido salvo com sucesso!');
          this.resetForm();
        },
        error: (error) => {
          console.error('Erro ao salvar o pedido:', error);
        }
      });
    } else {
      alert('Por favor, preencha todas as informações do cliente.');
    }
  }

  resetForm(): void {
    this.code = '';
    this.description = '';
    this.clientName = '';
    this.clientAddress = '';
    this.clientTelephone = '';
    this.selectedBurgers = [];
    this.selectedBeverages = [];
    this.observations = '';
  }
}
