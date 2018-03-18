import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailComponent } from '../app/card-detail/card-detail.component';
import { Card } from '../app/card';
import { CardnumberPipe } from '../app/cardnumber.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardDetailComponent', () => {
  let component: CardDetailComponent;
  let fixture: ComponentFixture<CardDetailComponent>;
  const card = {
    expiryMonth: '02',
    expiryYear: '2022',
    firstSixDigits: '123456',
    lastFourDigits: '7890',
    holderName: 'test name'
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [CardDetailComponent, CardnumberPipe]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailComponent);
    component = fixture.componentInstance;

    component.card = card;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('card on component should be the card', () => {
    expect(component.card).toEqual(card);
  });
});
