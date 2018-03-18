import { CardnumberPipe } from '../app/cardnumber.pipe';

describe('CardnumberPipe', () => {
  let pipe;
  beforeAll(() => {
    pipe = new CardnumberPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('trasnform number to card format', () => {
    const value = pipe.transform('1234567890123456');
    expect(value).toEqual('1234 5678 9012 3456');
  });
  it('empty return null', () => {
    const value = pipe.transform('');
    expect(value).toBeNull();
  });
});
