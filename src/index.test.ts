import { index } from './bem';

describe('bem', () => {
  test('bem', () => {
    expect(index('block__element', {
      foo: true,
      bar: false
    })).toEqual('block__element block__element--foo');
    expect(index('block', {
      foo: true,
      bar: false
    })).toEqual('block block--foo');
  });
});
