import { Card } from './card';

export class Transaction {
  action: string;
  amount: number;
  brandId: number;
  card: Card;
  currencyCode: string;
  id: string;
  trackingCode: string;

  constructor(action: string, amount: number, brandId: number, card: Card, currencyCode: string, id: string, trackingCode: string) {
    this.action = action;
    this.amount = amount;
    this.brandId = brandId;
    this.card = card;
    this.currencyCode = currencyCode;
    this.id = id;
    this.trackingCode = trackingCode;
  }
}
