import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Gillroy;
        src: url('/font/Gilroy-Light.otf') format('opentype'), url('/font/Gilroy-Light.otf') format('opentype');
    }

    :root{
        font-size:62.5%
    }

    *{
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle  