import { appCurrencyPipe } from '../app/app-currency.pipe';
import { getCurrencySymbol } from '@angular/common';

describe('CurrencyPipe', () => {
  let pipe;
  beforeAll(() => {
    pipe = new appCurrencyPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('trasnform eur to euro symbol narrow', () => {
    const eurPipe = pipe.transform('EUR');
    const eurCurr = getCurrencySymbol('EUR', 'narrow');

    expect(eurPipe).toEqual(eurCurr);
  });
  it('trasnform usd to dollar symbol narrow', () => {
    const usdPipe = pipe.transform('USD');
    const usdCurr = getCurrencySymbol('USD', 'narrow');

    expect(usdPipe).toEqual(usdCurr);
  });
  it('trasnform yen to euro symbol narrow', () => {
    const yenPipe = pipe.transform('JPY');
    const yenCurr = getCurrencySymbol('JPY', 'narrow');

    expect(yenPipe).toEqual(yenCurr);
  });
});
