export interface Item {
  id?: number;
  code: string;
  description: string;
  unitPrice: number;
  itemType: 'BEVERAGE' | 'INGREDIENT';
  hasSugar?: boolean;
  canBeExtra?: boolean;
  imageUrl?: string;
}
