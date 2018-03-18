import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TransactionDetailComponent } from '../app/transaction-detail/transaction-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Transaction } from '../app/transaction';
import { Card } from '../app/card';

describe('TransactionDetailComponent', () => {
  let component: TransactionDetailComponent;
  let fixture: ComponentFixture<TransactionDetailComponent>;

  const card = new Card('02', '2022', '123456', '7890', 'Test Name');

  const transaction = new Transaction('payment', 100, 1060, card, 'EUR', 'idTest', 'trackingCodeTest');

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [BrowserModule, FormsModule],
        declarations: [TransactionDetailComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailComponent);
    component = fixture.componentInstance;
    component.transaction = transaction;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('transaction on component should be the transaction', () => {
    expect(component.transaction).toEqual(transaction);
  });
});
