import { TestBed, inject } from '@angular/core/testing';

import { TransactionsService } from '../app/transactions.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('TransactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],
      providers: [TransactionsService]
    });
  });

  it(
    'should be created',
    inject([TransactionsService], (service: TransactionsService) => {
      expect(service).toBeTruthy();
    })
  );
});
