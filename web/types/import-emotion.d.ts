import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      black: array;
      white: array;
      main: array;
      mainLight: array;
      gray: array;
    };
    fontSize: {
      t: array;
      h: array;
      b: array;
      c: array;
      l: array;
    };
  }
}
