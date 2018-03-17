import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from '../app/transactions/transactions.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionsService } from '../app/transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { appCurrencyPipe } from '../app/app-currency.pipe';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [TransactionsService],
        declarations: [TransactionsComponent, appCurrencyPipe]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
