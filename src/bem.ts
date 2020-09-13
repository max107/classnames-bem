import cx from 'classnames';

export const bem = (base: string, ...mods: any): string => {
  const result = [];

  for (let i = 0; i < mods.length; i++) {
    const modifiers = cx(mods[i])
      .split(' ')
      .filter((n: any) => n)
      .map(modifier => `${base}--${modifier}`);
    result.push(modifiers);
  }

  return cx(base, result);
};