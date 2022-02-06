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
        const small: number | undefined = 1
        const medium: number | undefined = 2
        const large: number | undefined = 3
        const xlarge: number | undefined = 4
        const xxlarge: number | undefined = 5
        expect(bem('b-block-grid', {
            [`small-${small}`]: small,
            [`medium-${medium}`]: medium,
            [`large-${large}`]: large,
            [`xlarge-${xlarge}`]: xlarge,
            [`xxlarge-${xxlarge}`]: xxlarge,
        })).toEqual('b-block-grid b-block-grid--small-1 b-block-grid--medium-2 b-block-grid--large-3 b-block-grid--xlarge-4 b-block-grid--xxlarge-5');
    });
});
