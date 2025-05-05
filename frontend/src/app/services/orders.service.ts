import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersApiUrl = 'http://localhost:8080/orders/';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersApiUrl);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.ordersApiUrl}${id}`);
  }

  saveOrder(order: Partial<Order>): Observable<Order> {
    return this.http.post<Order>(this.ordersApiUrl, order);
  }

  updateOrder(id: number, order: Partial<Order>): Observable<Order> {
    return this.http.put<Order>(`${this.ordersApiUrl}${id}`, order);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ordersApiUrl}${id}`);
  }
}
