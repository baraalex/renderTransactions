import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsService } from './transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardnumberPipe } from './cardnumber.pipe';
import { appCurrencyPipe } from './app-currency.pipe';

@NgModule({
  declarations: [AppComponent, TransactionsComponent, TransactionDetailComponent, CardDetailComponent, CardnumberPipe, appCurrencyPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
