import { SomeNumberPipe } from './some-number.pipe';

describe('SomeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new SomeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
