import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

        ${reset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
}

export default GlobalStyle;
