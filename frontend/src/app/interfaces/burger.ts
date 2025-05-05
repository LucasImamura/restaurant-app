import { Item } from './item';

export interface Burger {
  id?: number;
  code: string;
  description: string;
  unitPrice: number;
  imageUrl?: string;
  ingredients: Item[];
  createdAt?: string;
  updatedAt?: string;
}
