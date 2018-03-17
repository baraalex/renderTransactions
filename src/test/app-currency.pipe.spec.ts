import { appCurrencyPipe } from '../app/app-currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new appCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
