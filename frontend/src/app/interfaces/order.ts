import { Item } from './item';
import { Burger } from './burger';


export interface Order {
  id?: number;
  description: string;
  code: string;
  clientName: string;
  clientAddress: string;
  clientTelephone: string;
  burgers: Burger[];
  beverages: Item[];
  observations?: string;
  createdAt?: string;
  updatedAt?: string;
}
