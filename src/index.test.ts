import { bem } from './index';

describe('bem', () => {
    test('modifiers', () => {
        expect(bem('block__element', { foo: true, bar: false })).toEqual('block__element block__element--foo');
        expect(bem('block', { foo: true, bar: false })).toEqual('block block--foo');
        expect(bem('block__element', { foo: null })).toEqual('block__element');
        expect(bem('block__element', 'active')).toEqual('block__element block__element--active');
        expect(bem('block__element', false)).toEqual('block__element');
        expect(bem('block__element', [
            null,
            undefined,
            false,
            'active'
        ])).toEqual('block__element block__element--active');
    });
});
