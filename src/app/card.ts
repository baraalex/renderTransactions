export class Card {
  expiryMonth: string;
  expiryYear: string;
  firstSixDigits: string;
  lastFourDigits: string;
  holderName: string;

  constructor(expiryMonth: string, expiryYear: string, firstSixDigits: string, lastFourDigits: string, holderName: string) {
    this.expiryMonth = expiryMonth;
    this.expiryYear = expiryYear;
    this.firstSixDigits = firstSixDigits;
    this.lastFourDigits = lastFourDigits;
    this.holderName = holderName;
  }
}
