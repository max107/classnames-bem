import cx from 'classnames';

export type Modifiers = |
    genericTypes
    | { [key: string]: genericTypes }

type genericTypes =
    | null
    | undefined
    | number
    | boolean
    | string
    | (null | undefined | boolean | number | string)[]

export const bem = (base: string, ...mods: Modifiers[]): string => cx(base, mods.map(mod => cx(mod)
    .split(' ')
    .filter((n: string) => n)
    .map(modifier => `${base}--${modifier}`)
));