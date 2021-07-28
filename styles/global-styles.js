import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-text-color: #fff;
    --secondary-text-color: #757575;
    --btn-blue-text-color: #0C438D;
    --btn-white-text-color: #fff;

    --linear-color-left: #DFE9F3;
    --linear-color-right: #fff;
  }
  
  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Red Hat Text', sans-serif;
    color: var(--primary-text-color);
    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

`
export default GlobalStyles
