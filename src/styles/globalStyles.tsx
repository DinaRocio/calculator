import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  :root {
    /* Colors */

    /* Theme 1 */
    /* background */
    --clr-main-background: hsl(222, 26%, 31%);
    --clr-toggle-background: hsl(223, 31%, 20%);
    --clr-screen-background: hsl(224, 36%, 15%);

    /* keys */
    --clr-key-background: hsl(225, 21%, 49%);
    --clr-key-shadow: hsl(224, 28%, 35%);
    --clr-red: hsl(6, 63%, 50%);
    --clr-dark-red: hsl(6, 70%, 34%);
    --clr-light-grayish-orange: hsl(30, 25%, 89%);
    --clr-grayish-orange: hsl(28, 16%, 65%);

    /* text */
    --clr-light-yellow: hsl(52, 100%, 62%);
    --clr-very-dark-grayish-blue: hsl(221, 14%, 31%);
    --clr-white: hsl(0, 0%, 100%);

    /* Typography */

    /* font family */
    --ff-spartan: "Spartan", sans-serif;

    /* font weight */
    --fw-semi-bold: 600;
    --fw-bold: 700;
    --fw-black: 900;
  }
  #root {
    font-family: var(--ff-spartan);
    line-height: 1.5;
    background-color: var(--clr-main-background);
    color: var(--white);
    min-height: 100vh;
    max-width: 100vw;
  }
`;
