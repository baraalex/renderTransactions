import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.less']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  action = '';
  currencyCode = '';
  orderBy = '';
  showFilters = false;

  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions = (action?: string, currencyCode?: string, orderBy?: string) => {
    this.transactionService.getTransactions(action, currencyCode, orderBy).subscribe(transaction => (this.transactions = transaction));
  };

  search = () => {
    this.getTransactions(this.action, this.currencyCode, this.orderBy);
    this.showFilters = false;
  };
}
