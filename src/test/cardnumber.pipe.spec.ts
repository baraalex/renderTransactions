import { CardnumberPipe } from '../app/cardnumber.pipe';

describe('CardnumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CardnumberPipe();
    expect(pipe).toBeTruthy();
  });
});
