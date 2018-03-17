import { Card } from './card';

export class Transaction {
  action: string;
  amount: number;
  brandId: number;
  card: Card;
  currencyCode: string;
  id: string;
  trackingCode: string;
}
