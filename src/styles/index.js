export const desktopBreakpoint = '1024px';

export const mobileVw = (px) => `${(px / 320) * 100}vw`;

export const desktopVw = (px) => `${(px / 1080) * 100}vw`;

export const ease = {
  expo: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
};

export const colors = {
  black: '#000000',
  white: '#fff',
  pink: '#F1DFDA',
  title: '#0D0213',
};

export const fonts = {
  black: 'Brandon blk',
  regular: 'Brandon reg',
  italic: 'Brandon med it',
};

export const letterSpacing = (space) => `${(space / 1000) * 1}em`;
